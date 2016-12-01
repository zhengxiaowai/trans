# trans 
一个上传文件到七牛的工具
返回 URL 方便在 markdown 中添加图片

## Installation

```npm install trans-js -g```

## Usage

创建 .transrc 文件在你用户目录下。
```shell
touch ~/.transrc
```

输入一下从七牛获取信息填入
```json
{
    "ACCESS_KEY": "你的 ACCESS_KEY",
    "SECRET_KEY": "你的 SECRET_KEY",
    "domain": "http://七牛的公开域名",
    "bucket": "你放置的产库，必须先创建"
}
```

```shell
trans-js xxxx.png
```


## LICENSE

 MIT

done and enjoy.
