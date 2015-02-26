Titanium.UI.setBackgroundColor('#000');

var WinView = Ti.UI.createView({
top:0,
width: '100%',
height: '100%',
backgroundColor: '#1C1C1C'
});


var win1 = Titanium.UI.createWindow({  
    title:'Page One',
    backgroundColor: '#0C2C2D'
});


var label1 = Titanium.UI.createLabel({
	color:'#3EE1E7',
	top: 15,
	text:'Information Systems for Dummies',
	font:{fontSize:30,fontFamily:'Sans Serif'},
	textAlign:'center',
	width:'auto'
});
var image = Ti.UI.createImageView({
	image:'/pics/icon.jpeg'
});

win1.add(label1);
win1.add(image);

WinView.add(win1);

var NavButton1 = Ti.UI.createButton({
	title: 'Lets get Started!',
	color: '#3DDBE1',
	width: '85%',
	top: 385,
	height: 40,
	backgroundColor: '#217D80',
	font: {
		fontSize: '25sp',
		fontWeight: 'bold'
	},
});

win1.add(NavButton1);

NavButton1.addEventListener('click', function() {
	win2.open();
});



var win2 = Titanium.UI.createWindow({  
    title:'Page Two',
    backgroundColor:'#051313'
});


var label2 = Titanium.UI.createLabel({
	color:'#3EE1E7',
	top:15,
	text:'Even a monkey can figure this out!',
	font:{fontSize:30,fontWeight: 'bold',fontFamily:'Sans Serif'},
	textAlign:'center',
	width:'auto'
});


win2.add(label2);


var NavButton2 = Ti.UI.createButton({
	title: 'Back to where we began',
	color: '#3DDBE1',
	top: 350,
	width: '85%',
	height: 40,
	backgroundColor: '#217D80',
	font: {
		fontSize: '20sp',
		fontWeight: 'bold'
	}
});


win2.add(NavButton2);


NavButton2.addEventListener('click', function() {
	Ti.API.info('Clicked Home Button');
	win2.close();
});


win1.open();


