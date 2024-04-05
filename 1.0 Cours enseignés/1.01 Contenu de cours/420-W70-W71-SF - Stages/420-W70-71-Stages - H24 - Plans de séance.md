```dataviewjs 

dv.pages("#cours/420-W70-W71-SF/Stages/planseance").forEach(i => {
	dv.el("h1", i.file.name)
	dv.el("div","![[" + i.file.link.path + "]]", { cls: "dataview dataview-margin-bottom"})
	})
```
