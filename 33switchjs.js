// JavaScript Document
function hide()
{
	document.getElementById("img1").style.visibility="hidden";
	document.getElementById("img2").style.visibility="hidden";
	document.getElementById("lblpla1").style.visibility="hidden";
	document.getElementById("lblpla2").style.visibility="hidden";
	document.getElementById("pla1").style.visibility="hidden";
	document.getElementById("pla2").style.visibility="hidden";
	document.getElementById("lblDis1").style.visibility="hidden";
	document.getElementById("lblDis2").style.visibility="hidden";
	document.getElementById("Dis1").style.visibility="hidden";
	document.getElementById("Dis2").style.visibility="hidden";
	document.getElementById("lblcam1").style.visibility="hidden";
	document.getElementById("lblcam2").style.visibility="hidden";
	document.getElementById("cam1").style.visibility="hidden";
	document.getElementById("cam2").style.visibility="hidden";
	document.getElementById("lblpri1").style.visibility="hidden";
	document.getElementById("lblpri2").style.visibility="hidden";
	document.getElementById("pri1").style.visibility="hidden";
	document.getElementById("pri2").style.visibility="hidden";
}
function Selet1()
{
	document.getElementById("img1").style.visibility="visible";
	document.getElementById("lblpla1").style.visibility="visible";
	document.getElementById("pla1").style.visibility="visible";
	document.getElementById("lblDis1").style.visibility="visible";
	document.getElementById("Dis1").style.visibility="visible";
	document.getElementById("lblcam1").style.visibility="visible";
	document.getElementById("cam1").style.visibility="visible";
	document.getElementById("lblpri1").style.visibility="visible";
	document.getElementById("pri1").style.visibility="visible";
	
}
function Selet2()
{
	document.getElementById("img2").style.visibility="visible";
	document.getElementById("lblpla2").style.visibility="visible";
	document.getElementById("pla2").style.visibility="visible";
	document.getElementById("lblDis2").style.visibility="visible";
	document.getElementById("Dis2").style.visibility="visible";
	document.getElementById("lblcam2").style.visibility="visible";
	document.getElementById("cam2").style.visibility="visible";
	document.getElementById("lblpri2").style.visibility="visible";
	document.getElementById("pri2").style.visibility="visible";
}

function dropdown1()
{
var a=document.getElementById("dropdown1").selectedIndex;
	
	var b=document.getElementById("dropdown2").selectedIndex;
	if(a==b)
	{  
		alert("Sorry we cant Compare same product")
		document.getElementById("img2").style.visibility="hidden";
	document.getElementById("lblpla2").style.visibility="hidden";
	document.getElementById("pla2").style.visibility="hidden";
	document.getElementById("lblDis2").style.visibility="hidden";
	document.getElementById("Dis2").style.visibility="hidden";
	document.getElementById("lblcam2").style.visibility="hidden";
	document.getElementById("cam2").style.visibility="hidden";
	document.getElementById("lblpri2").style.visibility="hidden";
	document.getElementById("pri2").style.visibility="hidden";
	}
switch (a)
{
case 0:
        document.getElementById("img1").style.visibility="hidden";
		document.getElementById("lblpla1").style.visibility="hidden";
		document.getElementById("pla1").style.visibility="hidden";
		document.getElementById("lblDis1").style.visibility="hidden";
		document.getElementById("Dis1").style.visibility="hidden";
		document.getElementById("lblcam1").style.visibility="hidden";
		document.getElementById("cam1").style.visibility="hidden";
		document.getElementById("lblpri1").style.visibility="hidden";
		document.getElementById("pri1").style.visibility="hidden";
case 1:
        document.getElementById("img1").style.visibility="hidden";
		document.getElementById("lblpla1").style.visibility="hidden";
		document.getElementById("pla1").style.visibility="hidden";
		document.getElementById("lblDis1").style.visibility="hidden";
		document.getElementById("Dis1").style.visibility="hidden";
		document.getElementById("lblcam1").style.visibility="hidden";
		document.getElementById("cam1").style.visibility="hidden";
		document.getElementById("lblpri1").style.visibility="hidden";
		document.getElementById("pri1").style.visibility="hidden";
		
		
case 8:
       
	    document.getElementById("img1").style.visibility="hidden";
		document.getElementById("lblpla1").style.visibility="hidden";
		document.getElementById("pla1").style.visibility="hidden";
		document.getElementById("lblDis1").style.visibility="hidden";
		document.getElementById("Dis1").style.visibility="hidden";
		document.getElementById("lblcam1").style.visibility="hidden";
		document.getElementById("cam1").style.visibility="hidden";
		document.getElementById("lblpri1").style.visibility="hidden";
		document.getElementById("pri1").style.visibility="hidden";

case 15:
        
		document.getElementById("img1").style.visibility="hidden";
		document.getElementById("lblpla1").style.visibility="hidden";
		document.getElementById("pla1").style.visibility="hidden";
		document.getElementById("lblDis1").style.visibility="hidden";
		document.getElementById("Dis1").style.visibility="hidden";
		document.getElementById("lblcam1").style.visibility="hidden";
		document.getElementById("cam1").style.visibility="hidden";
		document.getElementById("lblpri1").style.visibility="hidden";
		document.getElementById("pri1").style.visibility="hidden";



case 2:
        document.getElementById("img1").src="pix/pics/purse1.png";
		document.getElementById("pla1").value="PR-7677";
		document.getElementById("Dis1").value="Nextag Purse";
		document.getElementById("cam1").value="Giving you some colour to go with your perky personality; Grace gives you this Red-Black Striped Sling Bag with Silver Chain that is simply chic and unique. Make a splash with this one and you are sure to stand out in any crowd.";
		document.getElementById("pri1").value="Rs. 820";
		break;
case 3:
        document.getElementById("img1").src="pix/pics/purse2.png";
		document.getElementById("pla1").value="PR-0874";
		document.getElementById("Dis1").value="Nextag Purse";
		document.getElementById("cam1").value="Be dazzled by this Black-Red Patent Leather Formal Shoulder Bag designed by Silk Skin! Crafted from 100% genuine leather, which is polished and processed to give a refined patent finish.";
		document.getElementById("pri1").value="Rs. 1,800";
		break;
case 4:
        document.getElementById("img1").src="pix/pics/purse3.png";
		document.getElementById("pla1").value="PR-1108";
		document.getElementById("Dis1").value="Nextag Purse";
		document.getElementById("cam1").value="This Navy Blue-Red Stripe Casual Wallet from Silkella features an eye catching design that is sure to catch your attention. Bringing convenience and style all in one.";
		document.getElementById("pri1").value="Rs. 9,900";
		break;
case 5:
        document.getElementById("img1").src="pix/pics/purse4.png";
		document.getElementById("pla1").value="PR-3303";
		document.getElementById("Dis1").value="Nextag Purse";
		document.getElementById("cam1").value="Cute and young Pink-white wallet with flowers and flying butterflies. It's everything a girl wants to see in a wallet. Get this youthful BnB creation today.";
		document.getElementById("pri1").value="Rs. 4,520";
		break;

case 6:
        document.getElementById("img1").src="pix/pics/purse5.png";
		document.getElementById("pla1").value="PR-9726";
		document.getElementById("Dis1").value="Nextag Purse";
		document.getElementById("cam1").value="Show your fun and lively side with this pink wallet from BnB Accessories that sports a cute, cartoon pattern and a plastic butterfly dangling from a metal butterfly clip.";
		document.getElementById("pri1").value="Rs. 1,999";
		break;
case 7:
        document.getElementById("img1").src="pix/pics/purse6.png";
		document.getElementById("pla1").value="PR-8223";
		document.getElementById("Dis1").value="Nextag Purse";
		document.getElementById("cam1").value="Just Leather gives you this sober, stylish Brown luxury leather Classic Design Casual Purse that will prove to be the best in fashion, function and quality. Go for this one and you will never regret it no matter what.";
		document.getElementById("pri1").value="Rs. 1,200";
		break;

       
case 9:
        document.getElementById("img1").src="pix/pics/wallet1.png";
		document.getElementById("pla1").value="W-1636";
		document.getElementById("Dis1").value="Nextag Wallet";
		document.getElementById("cam1").value="Nextag brings you this elegantly Simple Black Leather Wallet with Beige Designing on the sides that is classy as it is functional!";
		document.getElementById("pri1").value="Rs. 1,550";
		break;
case 10:
        document.getElementById("img1").src="pix/pics/wallet2.png";
		document.getElementById("pla1").value="W-7596";
		document.getElementById("Dis1").value="Nextag Wallet";
		document.getElementById("cam1").value="This Simple Brown Compact Wallet from SILKSKIN Opens in three Compartments and is designed with the very best quality and finish to bring you exactly what you're looking for.";
		document.getElementById("pri1").value="Rs. 950";
		break;
case 11:
        document.getElementById("img1").src="pix/pics/wallet3.png";
		document.getElementById("pla1").value="W-1753";
		document.getElementById("Dis1").value="Nextag Wallet";
		document.getElementById("cam1").value="This trendy Genuine Leather Clear pocket card and currency holder from AI Inc is designed to give you nothing but the best in quality, style and craftsmanship.";
		document.getElementById("pri1").value="Rs. 1,250";
		break;
case 12:
        document.getElementById("img1").src="pix/pics/wallet4.png";
		document.getElementById("pla1").value="W-9455";
		document.getElementById("Dis1").value="Nextag Wallet";
		document.getElementById("cam1").value="Brown Casual Wallet by Nextag is a simple and subtle make. It is durable and will cater to your simple style statement.";
		document.getElementById("pri1").value="Rs. 910";
		break;
case 13:
        document.getElementById("img1").src="pix/pics/wallet5.png";
		document.getElementById("pla1").value="W-0045";
		document.getElementById("Dis1").value="Nextag Wallet";
		document.getElementById("cam1").value="This Fpassion Coffee Bean Wallet featuring Front Flap, Center Card with Card Cover is all you need to highlight your stylish personality in an effortless way. From design to detail and finishing, this piece will surely take you a long way.";
		document.getElementById("pri1").value="Rs. 2,150";
		break;
case 14:
        document.getElementById("img1").src="pix/pics/wallet6.png";
		document.getElementById("pla1").value="W-5277";
		document.getElementById("Dis1").value="Nextag Wallet";
		document.getElementById("cam1").value="Black Men Leather Bi Fold Wallet by House of Leather is purchase worthy. It looks very simple and elegant. Ideal for the professional class. It comes with a Horizontal Flap ID Window";
		document.getElementById("pri1").value="Rs. 690";
		break;     
case 16:
        document.getElementById("img1").src="pix/pics/handbag1.png";
		document.getElementById("pla1").value="HB-4202";
		document.getElementById("Dis1").value="Nextag Handbag";
		document.getElementById("cam1").value="Silk Skin wants to cater to the sophisticated and mature ladies with its Dark Brown Antique Leather Casual HandBag. Made using only the purest leather, it is guaranteed to be 100% genuine while the craftsmanship is commendable in itself.";
		document.getElementById("pri1").value="Rs. 1,250";
		break;
case 17:
        document.getElementById("img1").src="pix/pics/handbag2.png";
		document.getElementById("pla1").value="HB-9002";
		document.getElementById("Dis1").value="Nextag Handbag";
		document.getElementById("cam1").value="From AI Inc.’s outstanding Eleanor Collection comes the Red Handbag. Made from genuine leather, this handy accessory has a double buckle top opening which is home to ample room for all your belongings.";
		document.getElementById("pri1").value="Rs. 1,100";
		break;
		
case 18:
        document.getElementById("img1").src="pix/pics/handbag3.png";
		document.getElementById("pla1").value="HB-2252";
		document.getElementById("Dis1").value="Nextag Handbag";
		document.getElementById("cam1").value="Genuine Leather at its best! The Navy Blue-White Lady Sailor Bag by Jays is going to be a great addition to your casual bags collection!";
		document.getElementById("pri1").value="Rs. 2,000";
		break;
		
case 19:
        document.getElementById("img1").src="pix/pics/handbag4.png";
		document.getElementById("pla1").value="HB-0034";
		document.getElementById("Dis1").value="Nextag Handbag";
		document.getElementById("cam1").value="Go for something different yet stylish with this Blue-White Rexine Handbag with Checkered Front from Grace. Designed to give you cool, modern style in an big way.";
		document.getElementById("pri1").value="Rs. 1,500";
		break;
case 20:
        document.getElementById("img1").src="pix/pics/handbag5.png";
		document.getElementById("pla1").value="HB-0248";
		document.getElementById("Dis1").value="Nextag Handbag";
		document.getElementById("cam1").value="Every woman's desire BnB Accessories black and white hand bag with silver diamante will surely make you look edgy. A classy design with great usability is all she wants.";
		document.getElementById("pri1").value="Rs. 999";
		break;
case 21:
        document.getElementById("img1").src="pix/pics/handbag6.png";
		document.getElementById("pla1").value="HB-6623";
		document.getElementById("Dis1").value="Nextag Handbag";
		document.getElementById("cam1").value="Go for this amazing Yellow Camellia Flower Cross Hand Bag from Accessories4u that is sure to complement your style and personality.";
		document.getElementById("pri1").value="Rs. 1,700";
		break;


}
}
function dropdown2()
{
	var b=document.getElementById("dropdown2").selectedIndex;
switch (b)
{
case 0:
        document.getElementById("img2").style.visibility="hidden";
		document.getElementById("lblpla2").style.visibility="hidden";
		document.getElementById("pla2").style.visibility="hidden";
		document.getElementById("lblDis2").style.visibility="hidden";
		document.getElementById("Dis2").style.visibility="hidden";
		document.getElementById("lblcam2").style.visibility="hidden";
		document.getElementById("cam2").style.visibility="hidden";
		document.getElementById("lblpri2").style.visibility="hidden";
		document.getElementById("pri2").style.visibility="hidden";

case 1:
        document.getElementById("img2").style.visibility="hidden";
		document.getElementById("lblpla2").style.visibility="hidden";
		document.getElementById("pla2").style.visibility="hidden";
		document.getElementById("lblDis2").style.visibility="hidden";
		document.getElementById("Dis2").style.visibility="hidden";
		document.getElementById("lblcam2").style.visibility="hidden";
		document.getElementById("cam2").style.visibility="hidden";
		document.getElementById("lblpri2").style.visibility="hidden";
		document.getElementById("pri2").style.visibility="hidden";
case 8:
        document.getElementById("img2").style.visibility="hidden";
		document.getElementById("lblpla2").style.visibility="hidden";
		document.getElementById("pla2").style.visibility="hidden";
		document.getElementById("lblDis2").style.visibility="hidden";
		document.getElementById("Dis2").style.visibility="hidden";
		document.getElementById("lblcam2").style.visibility="hidden";
		document.getElementById("cam2").style.visibility="hidden";
		document.getElementById("lblpri2").style.visibility="hidden";
		document.getElementById("pri2").style.visibility="hidden";  
		
case 15:
        
		document.getElementById("img2").style.visibility="hidden";
		document.getElementById("lblpla2").style.visibility="hidden";
		document.getElementById("pla2").style.visibility="hidden";
		document.getElementById("lblDis2").style.visibility="hidden";
		document.getElementById("Dis2").style.visibility="hidden";
		document.getElementById("lblcam2").style.visibility="hidden";
		document.getElementById("cam2").style.visibility="hidden";
		document.getElementById("lblpri2").style.visibility="hidden";
		document.getElementById("pri2").style.visibility="hidden";
		
		
case 2:
        document.getElementById("img2").src="pix/pics/purse1.png";
		document.getElementById("pla2").value="PR-7677";
		document.getElementById("Dis2").value="Nextag Purse";
		document.getElementById("cam2").value="Giving you some colour to go with your perky personality; Grace gives you this Red-Black Striped Sling Bag with Silver Chain that is simply chic and unique. Make a splash with this one and you are sure to stand out in any crowd.";
		document.getElementById("pri2").value="Rs. 820";
		break;
case 3:
        document.getElementById("img2").src="pix/pics/purse2.png";
		document.getElementById("pla2").value="PR-0874";
		document.getElementById("Dis2").value="Nextag Purse";
		document.getElementById("cam2").value="Be dazzled by this Black-Red Patent Leather Formal Shoulder Bag designed by Silk Skin! Crafted from 100% genuine leather, which is polished and processed to give a refined patent finish.";
		document.getElementById("pri2").value="Rs. 1,800";
		break;
case 4:
        document.getElementById("img2").src="pix/pics/purse3.png";
		document.getElementById("pla2").value="PR-1108";
		document.getElementById("Dis2").value="Nextag Purse";
		document.getElementById("cam2").value="This Navy Blue-Red Stripe Casual Wallet from Silkella features an eye catching design that is sure to catch your attention. Bringing convenience and style all in one.";
		document.getElementById("pri2").value="Rs. 9,900";
		break;
case 5:
        document.getElementById("img2").src="pix/pics/purse4.png";
		document.getElementById("pla2").value="PR-3303";
		document.getElementById("Dis2").value="Nextag Purse";
		document.getElementById("cam2").value="Cute and young Pink-white wallet with flowers and flying butterflies. It's everything a girl wants to see in a wallet. Get this youthful BnB creation today.";
		document.getElementById("pri2").value="Rs. 4,520";
		break;
case 6:
        document.getElementById("img2").src="pix/pics/purse5.png";
		document.getElementById("pla2").value="PR-9726";
		document.getElementById("Dis2").value="Nextag Purse";
		document.getElementById("cam2").value="Show your fun and lively side with this pink wallet from BnB Accessories that sports a cute, cartoon pattern and a plastic butterfly dangling from a metal butterfly clip.";
		document.getElementById("pri2").value="Rs. 1,999";
		break;
case 7:
        document.getElementById("img2").src="pix/pics/purse6.png";
		document.getElementById("pla2").value="PR-8223";
		document.getElementById("Dis2").value="Nextag Purse";
		document.getElementById("cam2").value="Just Leather gives you this sober, stylish Brown luxury leather Classic Design Casual Purse that will prove to be the best in fashion, function and quality. Go for this one and you will never regret it no matter what.";
		document.getElementById("pri2").value="Rs. 1,200";
		break;


case 9:
        document.getElementById("img2").src="pix/pics/wallet1.png";
		document.getElementById("pla2").value="W-1636";
		document.getElementById("Dis2").value="Nextag Wallet";
		document.getElementById("cam2").value="Nextag brings you this elegantly Simple Black Leather Wallet with Beige Designing on the sides that is classy as it is functional!";
		document.getElementById("pri2").value="Rs. 1,550";
		break;
case 10:
        document.getElementById("img2").src="pix/pics/wallet2.png";
		document.getElementById("pla2").value="W-7596";
		document.getElementById("Dis2").value="Nextag Wallet";
		document.getElementById("cam2").value="This Simple Brown Compact Wallet from SILKSKIN Opens in three Compartments and is designed with the very best quality and finish to bring you exactly what you're looking for.";
		document.getElementById("pri2").value="Rs. 950";
		break;
case 11:
        document.getElementById("img2").src="pix/pics/wallet3.png";
		document.getElementById("pla2").value="W-1753";
		document.getElementById("Dis2").value="Nextag Wallet";
		document.getElementById("cam2").value="This trendy Genuine Leather Clear pocket card and currency holder from AI Inc is designed to give you nothing but the best in quality, style and craftsmanship.";
		document.getElementById("pri2").value="Rs. 1,250";
		break;
case 12:
        document.getElementById("img2").src="pix/pics/wallet4.png";
		document.getElementById("pla2").value="W-9455";
		document.getElementById("Dis2").value="Nextag Wallet";
		document.getElementById("cam2").value="Brown Casual Wallet by Nextag is a simple and subtle make. It is durable and will cater to your simple style statement.";
		document.getElementById("pri2").value="Rs. 910";
		break;
case 13:
        document.getElementById("img2").src="pix/pics/wallet5.png";
		document.getElementById("pla2").value="W-0045";
		document.getElementById("Dis2").value="Nextag Wallet";
		document.getElementById("cam2").value="This Fpassion Coffee Bean Wallet featuring Front Flap, Center Card with Card Cover is all you need to highlight your stylish personality in an effortless way. From design to detail and finishing, this piece will surely take you a long way.";
		document.getElementById("pri2").value="Rs. 2,150";
		break;
case 14:
        document.getElementById("img2").src="pix/pics/wallet6.png";
		document.getElementById("pla2").value="W-5277";
		document.getElementById("Dis2").value="Nextag Wallet";
		document.getElementById("cam2").value="Black Men Leather Bi Fold Wallet by House of Leather is purchase worthy. It looks very simple and elegant. Ideal for the professional class. It comes with a Horizontal Flap ID Window";
		document.getElementById("pri2").value="Rs. 690";
		break;     
       
case 16:
        document.getElementById("img2").src="pix/pics/handbag1.png";
		document.getElementById("pla2").value="HB-4202";
		document.getElementById("Dis2").value="Nextag Handbag";
		document.getElementById("cam2").value="Silk Skin wants to cater to the sophisticated and mature ladies with its Dark Brown Antique Leather Casual HandBag. Made using only the purest leather, it is guaranteed to be 100% genuine while the craftsmanship is commendable in itself.";
		document.getElementById("pri2").value="Rs. 1,250";
		break;
case 17:
        document.getElementById("img2").src="pix/pics/handbag2.png";
		document.getElementById("pla2").value="HB-9002";
		document.getElementById("Dis2").value="Nextag Handbag";
		document.getElementById("cam2").value="From AI Inc.’s outstanding Eleanor Collection comes the Red Handbag. Made from genuine leather, this handy accessory has a double buckle top opening which is home to ample room for all your belongings.";
		document.getElementById("pri2").value="Rs. 1,100";
		break;
case 18:
        document.getElementById("img2").src="pix/pics/handbag3.png";
		document.getElementById("pla2").value="HB-2252";
		document.getElementById("Dis2").value="Nextag Handbag";
		document.getElementById("cam2").value="Genuine Leather at its best! The Navy Blue-White Lady Sailor Bag by Jays is going to be a great addition to your casual bags collection!";
		document.getElementById("pri2").value="Rs. 2,000";
		break;
		
case 19:
        document.getElementById("img2").src="pix/pics/handbag4.png";
		document.getElementById("pla2").value="HB-0034";
		document.getElementById("Dis2").value="Nextag Handbag";
		document.getElementById("cam2").value="Go for something different yet stylish with this Blue-White Rexine Handbag with Checkered Front from Grace. Designed to give you cool, modern style in an big way.";
		document.getElementById("pri2").value="Rs. 1,500";
		break;
case 20:
        document.getElementById("img2").src="pix/pics/handbag5.png";
		document.getElementById("pla2").value="HB-0248";
		document.getElementById("Dis2").value="Nextag Handbag";
		document.getElementById("cam2").value="Every woman's desire BnB Accessories black and white hand bag with silver diamante will surely make you look edgy. A classy design with great usability is all she wants.";
		document.getElementById("pri2").value="Rs. 999";
		break;
case 21:
        document.getElementById("img2").src="pix/pics/handbag6.png";
		document.getElementById("pla2").value="HB-6623";
		document.getElementById("Dis2").value="Nextag Handbag";
		document.getElementById("cam2").value="Go for this amazing Yellow Camellia Flower Cross Hand Bag from Accessories4u that is sure to complement your style and personality.";
		document.getElementById("pri2").value="Rs. 1,700";
		break;

		
}
}