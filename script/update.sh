#!/bin/bash
git checkout master
git pull origin master
git merge origin/master
git checkout then
git rebase master
git push -u origin then