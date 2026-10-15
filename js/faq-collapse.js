/*
 * Collapsible FAQ questions (progressive enhancement), loaded only by _docs/faq.md.
 *
 * Each run of consecutive H2s is one question; its answer is everything up to the
 * next H2, H1 or <hr>. Headings get a disclosure <button>; answers start hidden.
 * Without JavaScript the page is unchanged and fully expanded.
 */
(function () {
    'use strict';

    var article = document.getElementById('markdown-content-container');
    if (!article || !('hidden' in article)) { return; }

    // hidden="until-found" lets the browser's find-in-page search closed answers.
    var untilFound = 'onbeforematch' in document.body;
    var groups = [];

    function setOpen(group, open) {
        if (open) {
            group.panel.removeAttribute('hidden');
        } else {
            group.panel.setAttribute('hidden', untilFound ? 'until-found' : '');
        }
        group.open = open;
        group.buttons.forEach(function (b) {
            b.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
    }

    function setAll(open) {
        groups.forEach(function (g) { setOpen(g, open); });
    }

    // --- Group the article's children into questions -------------------------
    var current = null;
    var prevWasH2 = false;
    var firstTopicHeading = null;
    var lastH1 = null;

    Array.prototype.slice.call(article.children).forEach(function (el) {
        var tag = el.tagName;
        if (tag === 'H2') {
            if (current && prevWasH2) {
                current.headings.push(el);
            } else {
                current = { headings: [el], body: [] };
                groups.push(current);
                if (!firstTopicHeading) { firstTopicHeading = lastH1 || el; }
            }
            prevWasH2 = true;
            return;
        }
        prevWasH2 = false;
        if (tag === 'H1' || tag === 'HR') {
            if (tag === 'H1') { lastH1 = el; }
            current = null;
        } else if (current && tag !== 'SCRIPT') {
            current.body.push(el);
        }
    });

    groups = groups.filter(function (g) { return g.body.length > 0; });
    if (!groups.length) { return; }

    // --- Build the disclosure widgets -----------------------------------------
    groups.forEach(function (g, i) {
        var panel = document.createElement('div');
        panel.className = 'faq-answer';
        panel.id = 'faq-answer-' + (i + 1);
        g.body[0].parentNode.insertBefore(panel, g.body[0]);
        g.body.forEach(function (el) { panel.appendChild(el); });
        g.panel = panel;
        panel.faqGroup = g;

        // One button (with the arrow) on the first heading; any further stacked
        // headings are aligned under it and toggle the same answer on mouse click.
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'faq-toggle';
        button.setAttribute('aria-controls', panel.id);
        var label = document.createElement('span');
        label.className = 'faq-label';
        button.appendChild(label);
        var first = g.headings[0];
        // Keep empty named anchors (e.g. <a name="filtered_gaf">) outside the button.
        Array.prototype.slice.call(first.childNodes).forEach(function (node) {
            var isAnchor = node.nodeType === 1 && node.tagName === 'A' &&
                !node.hasAttribute('href');
            if (!isAnchor) { label.appendChild(node); }
        });
        first.appendChild(button);
        button.addEventListener('click', function () { setOpen(g, !g.open); });
        g.buttons = [button];

        g.headings.forEach(function (h, j) {
            h.faqGroup = g;
            if (j > 0) {
                h.classList.add('faq-subheading');
                h.addEventListener('click', function () { setOpen(g, !g.open); });
            }
        });

        panel.addEventListener('beforematch', function () { setOpen(g, true); });
        setOpen(g, false);
    });

    // --- Expand all / Collapse all --------------------------------------------
    var controls = document.createElement('div');
    controls.className = 'faq-controls';
    controls.setAttribute('role', 'group');
    controls.setAttribute('aria-label', 'Show or hide all FAQ answers');
    [['Expand all', true], ['Collapse all', false]].forEach(function (spec) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'btn btn-default btn-sm';
        b.textContent = spec[0];
        b.addEventListener('click', function () { setAll(spec[1]); });
        controls.appendChild(b);
    });
    firstTopicHeading.parentNode.insertBefore(controls, firstTopicHeading);

    // --- Back to top on each topic heading (every H1 after the page title) ----
    var h1s = Array.prototype.slice.call(article.querySelectorAll(':scope > h1'));
    var pageTitle = h1s.shift();
    if (pageTitle && pageTitle.id) {
        h1s.forEach(function (h1) {
            var row = document.createElement('div');
            row.className = 'faq-section-head';
            h1.parentNode.insertBefore(row, h1);
            row.appendChild(h1);
            var top = document.createElement('a');
            top.className = 'faq-top';
            top.href = '#' + pageTitle.id;
            var icon = document.createElement('i');
            icon.className = 'fa-solid fa-arrow-up';
            icon.setAttribute('aria-hidden', 'true');
            top.appendChild(icon);
            top.appendChild(document.createTextNode(' Back to top'));
            row.appendChild(top);
        });
    }

    // --- Open the question a #hash points into --------------------------------
    function groupFor(el) {
        for (var n = el; n && n !== article; n = n.parentNode) {
            if (n.faqGroup) { return n.faqGroup; }
        }
        return null;
    }

    function revealHash() {
        var id = location.hash.slice(1);
        if (!id) { return; }
        try { id = decodeURIComponent(id); } catch (e) { /* use as-is */ }
        var el = document.getElementById(id) || document.getElementsByName(id)[0];
        if (!el || !article.contains(el)) { return; }
        var g = groupFor(el);
        if (g) { setOpen(g, true); }
        var target = el.closest('h1, h2, h3, h4, h5, h6') || el;
        // A question can be several stacked H2s; show it from its first heading.
        if (g && g.headings.indexOf(target) !== -1) { target = g.headings[0]; }
        var navbar = document.querySelector('.navbar-fixed-top');
        var offset = navbar ? navbar.offsetHeight + 10 : 0;
        window.scrollTo(0, target.getBoundingClientRect().top + window.pageYOffset - offset);
    }

    window.addEventListener('hashchange', revealHash);
    // Re-clicking a link to the current hash does not fire hashchange.
    document.addEventListener('click', function (e) {
        var a = e.target.closest && e.target.closest('a[href*="#"]');
        if (!a || a.host !== location.host || a.hash !== location.hash ||
            a.pathname.replace(/\/$/, '') !== location.pathname.replace(/\/$/, '')) { return; }
        setTimeout(revealHash, 0);
    });
    revealHash();
    window.addEventListener('load', revealHash);  // images above may shift layout

    // --- Print everything ------------------------------------------------------
    var saved = null;
    window.addEventListener('beforeprint', function () {
        saved = groups.map(function (g) { return g.open; });
        setAll(true);
    });
    window.addEventListener('afterprint', function () {
        if (saved) { groups.forEach(function (g, i) { setOpen(g, saved[i]); }); }
        saved = null;
    });

    // --- Styles ----------------------------------------------------------------
    var style = document.createElement('style');
    style.textContent =
        '.faq-toggle{display:flex;align-items:baseline;width:100%;margin:0;padding:0;' +
        'background:none;border:0;font:inherit;color:inherit;text-align:left;cursor:pointer}' +
        '.faq-toggle::before{content:"";flex:none;width:.45em;height:.45em;margin-right:.6em;' +
        'border-right:.12em solid currentColor;border-bottom:.12em solid currentColor;' +
        'transform:translateY(-.15em) rotate(-45deg);transition:transform .15s}' +
        '.faq-toggle[aria-expanded="true"]::before{transform:translateY(-.25em) rotate(45deg)}' +
        '.faq-toggle:hover,.faq-subheading:hover{text-decoration:underline}' +
        '.faq-label{flex:1 1 auto;min-width:0;line-height:inherit}' +
        // Indent = arrow width (.45em, border-box) + its .6em margin.
        '.faq-subheading{padding-left:1.05em;cursor:pointer}' +
        '.faq-toggle:focus-visible{outline:2px solid #4d90fe;outline-offset:3px}' +
        '.faq-controls{margin:1em 0}.faq-controls .btn{margin-right:.5em}' +
        // Bootstrap's normalize sets [hidden]{display:none}, which stops find-in-page
        // from searching until-found content; restore the browser's intended behavior.
        '.faq-answer[hidden="until-found"]{display:block;content-visibility:hidden}' +
        '@media (prefers-reduced-motion:reduce){.faq-toggle::before{transition:none}}' +
        '.faq-section-head{display:flex;flex-wrap:wrap;align-items:baseline;' +
        'justify-content:space-between;column-gap:1em}' +
        '.faq-top{font-size:14px;white-space:nowrap}' +
        '.faq-top:focus-visible{outline:2px solid #4d90fe;outline-offset:2px}' +
        '@media print{.faq-controls,.faq-top{display:none}.faq-toggle::before{display:none}}';
    document.head.appendChild(style);
})();
