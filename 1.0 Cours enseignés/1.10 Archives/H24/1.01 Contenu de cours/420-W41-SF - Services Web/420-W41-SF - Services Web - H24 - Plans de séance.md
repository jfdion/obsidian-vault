```dataviewjs 

dv.pages("#cours/420-W41-SF/ServicesWeb/planseance").sort(b => b.ClasseNum).forEach(i => {
	dv.el("h1", i.file.name)
	dv.el("div","![[" + i.file.link.path + "]]", { cls: "dataview dataview-margin-bottom"})
	})
```
