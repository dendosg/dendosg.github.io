const fs = require('fs')
const postDir = '_posts/'
const info = `---
layout: post
title: This is title
date: '20-04-2019'
categories: []
tags: []
cover: ''
excerpt: 'This is short description'
related_posts:
 - link: /suoi-nuoc-mooc
---`


const generateBlankPost = () => {
    const today =  new Date()
    const date = today.getDate()
    const month = today.getMonth()
    const year = today.getFullYear()
    const fileName = `${postDir}${year}-${month}-${date}-blank-file.md`
    fs.writeFileSync(fileName,info)
}

generateBlankPost()