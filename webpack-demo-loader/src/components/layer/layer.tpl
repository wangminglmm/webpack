<div class="layer">
	<div>this is a layer</div>
</div>

<!--ejs语法,-->
<h2>我是ejs语法<%= hello %></h2>
<!--模板里面的图片用相对路径会显示不出来，采用下面方法-->
<img src="../../assets/demo.png" alt="" />
<img src="${ require('../../assets/demo.png') }"/>
<ul>
<% for ( var i = 0; i < arr.length; i++ ) {%>
	<li><%= arr[i] %></li>
<% } %>
	
</ul>

