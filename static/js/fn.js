//控制底部导航栏变色
function nav(n){
	var s=$('.index-footer>ul>li:nth-of-type('+n+')');
	s.children('a').css('color','#01a9ff');
	s.siblings('li').children('a').css('color','#333');
}