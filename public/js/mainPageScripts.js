function NavBarRollon(Element){
			Element.style.color = "#CFB53B";
		}
		function NavBarRolloff(Element){
			Element.style.color = "#7a7a8a";
		}
		function ScrollToElement(Element){
			var heightFromTop;
			if (Element.innerHTML === "About") { heightFromTop = getHeightFromTopOfPage(Element); }
			if (Element.innerHTML === "Resources") { heightFromTop = getHeightFromTopOfPage(Element); }
			if (Element.innerHTML === "Events") { heightFromTop = getHeightFromTopOfPage(Element); }
			if (Element.innerHTML === "News") { heightFromTop = getHeightFromTopOfPage(Element); }
			if (Element.innerHTML === "Rush") { heightFromTop = getHeightFromTopOfPage(Element); }
			if (Element.innerHTML === "Contact") { heightFromTop = getHeightFromTopOfPage(Element); }
		}
		function getHeightFromTopOfPage(ele){
			//var ele = document.getElementById("News");
			var x = 0;
			while(ele){
			   x += ele.offsetTop;
			   ele = ele.offsetParent;
			}
			console.log("Height to top: "+x);
			x -= 90;
			console.log("New Height: "+x);
			//$('html, body').animate({window.scrollTo(0,x)}, 1200);



			return x;
				//window.scrollTo(0,x);
		}
		function scrollYo(){
			var x = getHeightFromTopOfPage(Element);
			window.scrollTo(0,x);
		}
		$(document).ready(function() {
			$("#NavAbout").click(function(){
				$('html').animate({scrollTop: $("#About").offset().top - 100}, 1200);
			});
		});
		$(document).ready(function() {
			$("#NavResources").click(function(){
				$('html').animate({scrollTop: $("#Resources").offset().top - 100}, 1200);
			});
		});
		$(document).ready(function() {
			$("#NavEvents").click(function(){
				$('html').animate({scrollTop: $("#Events").offset().top - 100}, 1200);
			});
		});
		$(document).ready(function() {
			$("#NavNews").click(function(){
				$('html').animate({scrollTop: $("#News").offset().top - 100}, 1200);
			});
		});
		$(document).ready(function() {
			$("#NavRush").click(function(){
				$('html').animate({scrollTop: $("#Rush").offset().top - 100}, 1200);
			});
		});
		$(document).ready(function() {
			$("#NavContact").click(function(){
				$('html').animate({scrollTop: $("#Contact").offset().top - 100}, 1200);
			});
		});
		/**
		$(document).ready(function() {
			$("#test2").click(function(){
				//$('html').animate({scrollTop: $("#News").offset().top}, 1200);
				var elementt = $("#News");
				$('html').animate({scrollTop: getHeightFromTopOfPage(document.getElementById("News"))}, 1200);
			});
		});
		*/