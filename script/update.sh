#!/bin/bash
git fetch
git checkout master
git merge origin/master
git checkout then
git merge origin/then
git rebase master
git push -u origin then