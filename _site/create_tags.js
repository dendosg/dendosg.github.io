const fs = require('fs')
let tags = fs.readFileSync('create_tags.txt').toString().split('\n')

tags.forEach(tag => {
    fs.writeFileSync('tag/' + change_alias(tag) + '.md', create_file_tag(tag))
    fs.appendFileSync('create_tags.md',create_tag_config(tag)+'\n')
});
function create_tag_config(tag){
    return `-
  slug: ${change_alias(tag)}
  name: ${tag}`
}
function create_file_tag(tag) {
    return `---
layout: tag
banner-title: ${tag}
description: Tổng hợp các bài viết được gắn nhãn ${tag}
tag_name: ${tag}
permalink: /tag/${change_alias(tag)}
---`
}
function change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, " ");
    str = str.replace(/ + /g, " ");
    str = str.split(' ').join('-')
    str = str.trim();
    return str;
}
