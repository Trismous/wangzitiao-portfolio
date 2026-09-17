const projects = {
  naais: {
    no: "01", tag: "概念包装 · AIGC", title: "纳爱斯牙膏 IP 与包装设计",
    cover: "assets/images/naais-cover.webp", alt: "纳爱斯牙膏 IP 与包装设计主视觉",
    intro: "围绕“笑容如瓷，清新守护”的概念，构建从 IP 角色、色彩编码到系列包装和宣传视觉的完整体验。",
    role: "概念包装 / 课程项目", scope: "IP 形象 · 系列包装 · 海报 · 礼盒与周边延展", tools: "Canva · ChatGPT · Midjourney · Stable Diffusion · 即梦",
    closing: "以清新、轻盈的视觉语气，把牙齿护理的信息层级、角色记忆点与多规格包装串成一个可扩展的品牌世界。",
    images: [["assets/images/naais-packaging.webp", "纳爱斯包装展示"], ["assets/images/naais-character.webp", "纳爱斯牙膏 IP 角色"], ["assets/images/naais-composition.webp", "纳爱斯系列包装组合"], ["assets/images/naais-poster.webp", "纳爱斯海报视觉"], ["assets/images/naais-board.webp", "纳爱斯项目展板"]]
  },
  taiping: {
    no: "02", tag: "文化 IP · 动态影像", title: "兰州太平鼓 IP 与影像设计",
    cover: "assets/images/taiping-cover.webp", alt: "兰州太平鼓 IP 影像场景",
    intro: "以“鼓声唤醒黄河记忆，少年传承太平精神”为叙事，把兰州太平鼓转化为年轻、具有动势的国潮 IP 与影像语言。",
    role: "文化 IP 视觉设计", scope: "角色设定 · 宣传海报 · 应用场景 · 视频视觉", tools: "AIGC 图像辅助 · 排版设计 · 视觉叙事",
    closing: "少年鼓手“平平”承接鼓乐、舞蹈与民俗祈福的能量，让传统非遗在更贴近新媒体的视觉语境中再次被看见。",
    images: [["assets/images/taiping-character.webp", "太平鼓角色三视图"], ["assets/images/taiping-poster.webp", "太平鼓宣传海报"], ["assets/images/taiping-extension.webp", "太平鼓核心延展"], ["assets/images/taiping-cover.webp", "太平鼓应用场景"]]
  },
  lanzhou: {
    no: "03", tag: "城市形象 · 宣传视觉", title: "兰州馆城市视觉系统",
    cover: "assets/images/lanzhou-foldout.webp", alt: "兰州馆视觉形象折页",
    intro: "以“黄河之都，丝路新城”为总主题，把地域文化、城市地标、产业信息与展会传播需求整合为统一的宣传系统。",
    role: "城市展馆视觉设计", scope: "主题定位 · 折页信息设计 · 系列海报 · 宣传视觉", tools: "Photoshop · AI 辅助创意 · 版式系统",
    closing: "深蓝与金色构成稳重而有仪式感的底色，黄河流线串联中山桥、白塔山与现代城市发展信息，建立城市展馆的识别度。",
    images: [["assets/images/lanzhou-cover.webp", "兰州馆宣传海报"], ["assets/images/lanzhou-foldout.webp", "兰州馆折页信息设计"], ["assets/images/lanzhou-poster.webp", "兰州馆城市视觉海报"]]
  },
  baita: {
    no: "04", tag: "文创产品 · IP 设计", title: "白塔守护灵文创产品系统",
    cover: "assets/images/baita-cover.webp", alt: "白塔守护灵茶具文创产品",
    intro: "以“轻国风・暖陪伴”为设计内核，将白塔的守护意象转译为可进入日常生活的软萌 IP 与文创产品。",
    role: "文创产品概念与视觉", scope: "IP 形象 · 抱枕 · 茶具 · 钥匙扣 · 产品展示", tools: "视觉设计 · 产品表达 · 材质与应用场景构思",
    closing: "让东方文化符号从静态意象转为日常陪伴：以柔和色彩、云纹细节和可触达的生活物件，平衡文化感与亲和力。",
    images: [["assets/images/baita-pillow.webp", "白塔守护灵抱枕"], ["assets/images/baita-cover.webp", "白塔守护灵茶具"], ["assets/images/baita-keychain.webp", "白塔守护灵钥匙扣"]]
  },
  water: {
    no: "05", tag: "产品概念 · 3D", title: "BOTTLELIGHT 户外按压净水装置",
    cover: "assets/images/water-cover.webp", alt: "BOTTLELIGHT 户外按压净水装置渲染",
    intro: "针对户外饮水场景进行的产品概念探索，以便携结构、夜间光源与净水体验构成视觉化的使用叙事。",
    role: "产品概念表达", scope: "产品造型 · 三视图 · 场景渲染 · 结构与尺寸表达", tools: "3D 建模 · 产品渲染 · 视觉排版",
    closing: "从结构草图到场景渲染，以清晰的产品语言梳理移动、照明与净水之间的使用关系。",
    images: [["assets/images/water-board.webp", "户外按压净水装置设计展板"], ["assets/images/water-render.webp", "户外按压净水装置应用场景"], ["assets/images/water-line.webp", "户外按压净水装置线稿"]]
  },
  tujia: {
    no: "06", tag: "信息图形 · 文化", title: "土家族西兰卡普纹样信息展板",
    cover: "assets/images/tujia-cover.webp", alt: "土家族西兰卡普纹样信息展板",
    intro: "以信息图形的阅读逻辑整理西兰卡普纹样：在结构、色彩与文化符号之间建立清晰的视觉索引。",
    role: "信息图形与版式设计", scope: "文化纹样梳理 · 信息层级 · 展板排版", tools: "版式设计 · 图形整理 · 视觉叙事",
    closing: "用统一的色彩与秩序组织复杂的纹样信息，使传统图案既保持文化厚度，也具备当代展板的可读性。",
    images: [["assets/images/tujia-cover.webp", "土家族西兰卡普纹样展板"], ["assets/images/infographic-cover.webp", "信息图形设计展板"]]
  }
};

const dialog = document.querySelector("[data-dialog]");
const detail = document.querySelector("[data-detail]");
const cards = [...document.querySelectorAll("[data-project]")];
const filters = [...document.querySelectorAll("[data-filter]")];
const nav = document.querySelector("[data-site-nav]");

function markup(p) {
  const images = p.images.map(([src, alt]) => `<figure><img src="${src}" loading="lazy" decoding="async" alt="${alt}" /></figure>`).join("");
  return `<section class="detail-hero"><img src="${p.cover}" alt="${p.alt}" /><div><p class="eyebrow">${p.no} / ${p.tag}</p><h2 id="project-title">${p.title}</h2></div></section><section class="detail-intro"><p>${p.intro}</p><div class="meta"><div><span>角色</span><p>${p.role}</p></div><div><span>内容</span><p>${p.scope}</p></div><div><span>工具</span><p>${p.tools}</p></div></div></section><section class="gallery" aria-label="${p.title}项目图片">${images}</section><section class="detail-closing"><p>${p.closing}</p><button data-close type="button">BACK TO WORK ↑</button></section>`;
}
function openProject(key) {
  const p = projects[key];
  if (!p || !dialog || !detail) return;
  detail.className = "detail";
  detail.innerHTML = markup(p);
  dialog.showModal();
  dialog.scrollTo({top: 0});
  document.body.classList.add("modal-open");
  history.replaceState(null, "", `#${key}`);
}
function closeProject() {
  if (!dialog?.open) return;
  dialog.close();
  document.body.classList.remove("modal-open");
  history.replaceState(null, "", "#work");
}
cards.forEach(card => card.addEventListener("click", () => openProject(card.dataset.project)));
dialog?.addEventListener("click", event => { if (event.target.closest("[data-close]")) closeProject(); });
dialog?.addEventListener("cancel", event => { event.preventDefault(); closeProject(); });
dialog?.addEventListener("close", () => document.body.classList.remove("modal-open"));

filters.forEach(button => button.addEventListener("click", () => {
  const active = button.dataset.filter;
  filters.forEach(item => item.classList.toggle("is-active", item === button));
  cards.forEach(card => { card.hidden = active !== "all" && !card.dataset.category.split(" ").includes(active); });
}));

function updateNav() { nav?.classList.toggle("light", window.scrollY > Math.min(innerHeight * .75, 720)); }
addEventListener("scroll", updateNav, {passive: true});
updateNav();
document.querySelectorAll("[data-year]").forEach(node => { node.textContent = new Date().getFullYear(); });
if (location.hash && projects[location.hash.slice(1)]) addEventListener("load", () => openProject(location.hash.slice(1)), {once: true});
