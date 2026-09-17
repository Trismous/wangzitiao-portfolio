# 发布到 GitHub Pages

作品集已经是纯静态网站，不需要购买域名。

## 方式 A：项目地址

发布地址会是：

`https://你的GitHub用户名.github.io/wangzitiao-portfolio/`

1. 在 GitHub 新建一个 **Public** 仓库，仓库名填写 `wangzitiao-portfolio`。
2. 将这个文件夹里的全部文件上传到仓库根目录。
3. 打开仓库 **Settings → Pages**。
4. 在 **Build and deployment** 中选择 **Deploy from a branch**。
5. 分支选择 `main`，目录选择 `/ (root)`，点击保存。
6. 等待发布完成后，点击页面给出的链接。

## 方式 B：个人主页地址

如果仓库名创建为：

`你的GitHub用户名.github.io`

发布地址就是更短的：

`https://你的GitHub用户名.github.io/`

把本作品集文件上传至这个仓库根目录即可。

## 用 Git 上传（可选）

```powershell
cd E:\codex\测试\wangzitiao-portfolio
git init
git add .
git commit -m "Publish Wang Zitao portfolio"
git branch -M main
git remote add origin https://github.com/你的GitHub用户名/wangzitiao-portfolio.git
git push -u origin main
```

发布前只需要把示例中的 `你的GitHub用户名` 换成自己的 GitHub 用户名。
