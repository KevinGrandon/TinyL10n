TinyL10n
------------------------------

TinyL10n is a super-lightweight library for client side localization. It may be lacking a lot of features that well-established frameworks have, but it does what I need it to do.

**Usage:**

index.html
```
<html>
	<head>
		<script src="l10n.min.js"></script>
		<script src="app.js"></script>
	</head>
	<body></body>
</html>
```

in locale/en-US.json:
```
{
	"greeting": "Hello {{name}}"
}
```

app.js:
```
l10n.ready(function() {
	alert(_('greeting', {name: 'bob'})) // alerts "Hello Bob"
})
```
