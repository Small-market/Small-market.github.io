---
icon: edit
date: 2022-01-01
category:
  - CategoryA
tag:
  - tag A
  - tag B
---

# 文章 1

## 标题 2

这里是内容。

### 标题 3

这里是内容。

``` java

  /**
   * 红字信息表十申请查询
   */
  @Test
  void uploadHzxxSelect() throws Exception {
    post(Urls.uploadHzxx, getFileParam("/uploadHzxx/SelectParam.json"));
  }
```