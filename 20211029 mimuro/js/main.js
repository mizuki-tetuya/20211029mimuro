document.addEventListener('DOMContentLoaded', function(){
	function menuClick() {
		// クリックした際に実行する処理を記述
		window.scrollTo({
			top: 0,
		});
	}
	// 引数に指定したclassの値をもつ要素をすべて取得
	const menus = document.getElementsByClassName('news-item');
	// 上記で取得したすべての要素に対してクリックイベントを適用
	for(let i = 0; i < menus.length; i++) {
  menus[i].addEventListener('click', menuClick, false);
	}
}, false);

document.addEventListener('DOMContentLoaded', function(){
	function menuClick() {
		window.scrollTo({
			top: 0,
		});
	}
	const blogs = document.getElementsByClassName('blog-card-img');
	for(let i = 0; i < blogs.length; i++) {
  blogs[i].addEventListener('click', menuClick, false);
	}
}, false);

document.addEventListener('DOMContentLoaded', function(){
	function menuClick() {
		window.scrollTo({
			top: 0,
		});
	}
	const blogTexts = document.getElementsByClassName('blog-text');
	for(let i = 0; i < blogTexts.length; i++) {
  blogTexts[i].addEventListener('click', menuClick, false);
	}
}, false);

/*ニュース*/
document.addEventListener('DOMContentLoaded', function(){
	function menuClick() {
		window.scrollTo({
			top: 0,
		});
	}
	const newsContents = document.getElementsByClassName('news-content-item');
	for(let i = 0; i < newsContents.length; i++) {
  newsContents[i].addEventListener('click', menuClick, false);
	}
}, false);

/*社員ブログ*/
document.addEventListener('DOMContentLoaded', function(){
	function menuClick() {
		window.scrollTo({
			top: 0,
		});
	}
	const blogImgs = document.getElementsByClassName('blog-content-img');
	for(let i = 0; i < blogImgs.length; i++) {
	blogImgs[i].addEventListener('click', menuClick, false);
	}
}, false);

document.addEventListener('DOMContentLoaded', function(){
	function menuClick() {
		window.scrollTo({
			top: 0,
		});
	}
	const blogTexts = document.getElementsByClassName('blog-content-text');
	for(let i = 0; i < blogTexts.length; i++) {
	blogTexts[i].addEventListener('click', menuClick, false);
	}
}, false);

/*ドロワーメニュー*/
const target = document.getElementById("menu");
target.addEventListener('click', () => {
  target.classList.toggle('open');
  const navList = document.getElementById("header-nav");
  navList.classList.toggle('in');
});
/*事業メニュー*/
const targetService = document.getElementById("menu");
targetService.addEventListener('click', () => {
  targetService.classList.toggle('open');
  const navList2 = document.getElementById("header-nav-service");
  navList2.classList.toggle('in');
});

/*ニュースドロワーメニュー */
const targetNews = document.getElementById("menu");
targetNews.addEventListener('click', () => {
  targetNews.classList.toggle('open');
  const navList3 = document.getElementById("header-nav-news");
  navList3.classList.toggle('in');
});
/*社員ブログドロワーメニュー */
const targetBlog = document.getElementById("menu");
targetBlog.addEventListener('click', () => {
  targetBlog.classList.toggle('open');
  const navList4 = document.getElementById("header-nav-blog");
  navList4.classList.toggle('in');
});
/*会社概要ドロワーメニュー */
const targetCompany = document.getElementById("menu");
targetCompany.addEventListener('click', () => {
  targetCompany.classList.toggle('open');
  const navList5 = document.getElementById("header-nav-company");
  navList5.classList.toggle('in');
});
/*採用情報ドロワーメニュー */
const targetRecruit = document.getElementById("menu");
targetRecruit.addEventListener('click', () => {
  targetRecruit.classList.toggle('open');
  const navList6 = document.getElementById("header-nav-recruit");
  navList6.classList.toggle('in');
});
/*お問い合わせドロワーメニュー */
const targetContact = document.getElementById("menu");
targetContact.addEventListener('click', () => {
  targetContact.classList.toggle('open');
  const navList7 = document.getElementById("header-nav-contact");
  navList7.classList.toggle('in');
});