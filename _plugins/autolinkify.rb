require 'rinku'

module Jekyll
    module AutolinkifyFilter
        def autolinkify(input)
            Rinku.auto_link(input, :all, 'target="_blank"')
        end
    end
end

Liquid::Template.register_filter(Jekyll::AutolinkifyFilter)
