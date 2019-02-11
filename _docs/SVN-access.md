---
title: Access to the GO Subversion Repository
permalink: /docs/SVN-access/
redirect_from: /page/svn-help
---

# Access to the GO Subversion Repository

Subversion is a version control system; the software can be downloaded from [Apache Subversion](https://web.archive.org/web/20171108025348/http://subversion.apache.org/){:target="blank"} if it is not installed on your computer.

The GO subversion repository can be also viewed online using the [viewvc repository browser](http://viewvc.geneontology.org/viewvc/GO-SVN/trunk/){:target="blank"}.
## GO SVN basics

The GO ontology file is stored in the trunk directory of the GO SVN repository:

```
trunk/
  ontology/
  editors/
  gene_ontology_write.obo
  [...other files and directories...]
```

To access the repository, you will need to substitute your GO CVS user name for `go_user` in the following commands.

## Check out the repository

The basic command looks like this:

     `  user% svn co svn+ssh://go_user@ext.geneontology.org/share/go/svn/path/to/directory /path/to/local_directory `

Check out the trunk directory into your current working directory (creates a go directory):

     `  user% svn --non-interactive --trust-server-cert --ignore-externals co svn+ssh://go_user@ext.geneontology.org/share/go/svn/trunk go `

Check out the directory trunk to a directory called go-files on your computer (go-files will be created if it does not already exist; does not create a directory called trunk):

     `  user% svn --ignore-externals co svn+ssh://go_user@ext.geneontology.org/share/go/svn/trunk /Users/me/work/go-files `

The contents of trunk will now be stored in /Users/me/work/go-files.

If you want to download the repository and are not planning to commit files, you can access it anonymously using the following command; fill in the path to the local directory where you wish to save the repository, or leave blank to save it in the current directory.

     `  user% svn --ignore-externals co svn://ext.geneontology.org/trunk /path/to/local_directory `

## Updating the repository

To update all repository files to the most recent version, issue these commands (assumes that you move to the base directory that you saved the repository to in the first step):

     `  user% cd /Users/me/work/go-files user% svn --ignore-externals update `

To update the repository to the most recent version without changing directory, specify the path in the update command:

     `  user% svn --ignore-externals update /Users/me/work/go-files `

## Saving your changes

Commit a single file (changing to the base directory first):

     `  user% cd /Users/me/work/go-files/ user% svn commit ontology/editors/gene_ontology_write.obo `

Commit all changed files in the ontology directory:

     `  user% cd /Users/me/work/go-files/ontology user% svn commit `

Commit changed files in the ontology directory without changing directory:

     `  user% svn commit /Users/me/work/go-files/ontology `

More detailed instructions on using Subversion can be found in the free book [Version Control with Subversion](http://svnbook.red-bean.com/){:target="blank"}. 
