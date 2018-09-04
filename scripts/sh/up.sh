#!/bin/bash
if [ $1 == "test" ]
	then
	mkdir output/bak
    cd output/bak
    dirdate=`date +%Y%m%d`_`date +%H%M%S`
    mkdir $dirdate
    #scp -r appdeploy@10.204.56.75:/app/nginx/html/mall.fcbox.com/mall-sit2.xxx.com/frontend $dirdate
    cd ../
    rm -rf frontend
    mv test frontend
    #scp -r frontend appdeploy@10.204.56.75:/app/nginx/html/mall.fcbox.com/mall-sit2.xxx.com/
fi
