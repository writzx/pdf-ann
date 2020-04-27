const sample_pdf_data = atob(`JVBERi0xLjMNCiXi48/TDQoNCjEgMCBvYmoNCjw8DQovVHlw
ZSAvQ2F0YWxvZw0KL091dGxpbmVzIDIgMCBSDQovUGFnZXMgMyAwIFINCj4+DQplbmRvYmoN
Cg0KMiAwIG9iag0KPDwNCi9UeXBlIC9PdXRsaW5lcw0KL0NvdW50IDANCj4+DQplbmRvYmoN
Cg0KMyAwIG9iag0KPDwNCi9UeXBlIC9QYWdlcw0KL0NvdW50IDINCi9LaWRzIFsgNCAwIFIg
NiAwIFIgXSANCj4+DQplbmRvYmoNCg0KNCAwIG9iag0KPDwNCi9UeXBlIC9QYWdlDQovUGFy
ZW50IDMgMCBSDQovUmVzb3VyY2VzIDw8DQovRm9udCA8PA0KL0YxIDkgMCBSIA0KPj4NCi9Q
cm9jU2V0IDggMCBSDQo+Pg0KL01lZGlhQm94IFswIDAgNjEyLjAwMDAgNzkyLjAwMDBdDQov
Q29udGVudHMgNSAwIFINCj4+DQplbmRvYmoNCg0KNSAwIG9iag0KPDwgL0xlbmd0aCAxMDc0
ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3
MjIuMjgwMCBUZA0KKCBBIFNpbXBsZSBQREYgRmlsZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEw
IFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIFRoaXMgaXMgYSBzbWFsbCBkZW1vbnN0cmF0
aW9uIC5wZGYgZmlsZSAtICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjY0
LjcwNDAgVGQNCigganVzdCBmb3IgdXNlIGluIHRoZSBWaXJ0dWFsIE1lY2hhbmljcyB0dXRv
cmlhbHMuIE1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0K
NjkuMjUwMCA2NTIuNzUyMCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0
ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAw
IDYyOC44NDgwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3Jl
IHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAg
VGYNCjY5LjI1MDAgNjE2Ljg5NjAgVGQNCiggdGV4dC4gQW5kIG1vcmUgdGV4dC4gQm9yaW5n
LCB6enp6ei4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kICkgVGoNCkVUDQpC
VA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjA0Ljk0NDAgVGQNCiggbW9yZSB0ZXh0LiBBbmQg
bW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0
LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDU5Mi45OTIwIFRkDQooIEFu
ZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYN
CjY5LjI1MDAgNTY5LjA4ODAgVGQNCiggQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4g
QW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQov
RjEgMDAxMCBUZg0KNjkuMjUwMCA1NTcuMTM2MCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0
LiBBbmQgbW9yZSB0ZXh0LiBFdmVuIG1vcmUuIENvbnRpbnVlZCBvbiBwYWdlIDIgLi4uKSBU
ag0KRVQNCmVuZHN0cmVhbQ0KZW5kb2JqDQoNCjYgMCBvYmoNCjw8DQovVHlwZSAvUGFnZQ0K
L1BhcmVudCAzIDAgUg0KL1Jlc291cmNlcyA8PA0KL0ZvbnQgPDwNCi9GMSA5IDAgUiANCj4+
DQovUHJvY1NldCA4IDAgUg0KPj4NCi9NZWRpYUJveCBbMCAwIDYxMi4wMDAwIDc5Mi4wMDAw
XQ0KL0NvbnRlbnRzIDcgMCBSDQo+Pg0KZW5kb2JqDQoNCjcgMCBvYmoNCjw8IC9MZW5ndGgg
Njc2ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1
MCA3MjIuMjgwMCBUZA0KKCBTaW1wbGUgUERGIEZpbGUgMiApIFRqDQpFVA0KQlQNCi9GMSAw
MDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIC4uLmNvbnRpbnVlZCBmcm9tIHBhZ2Ug
MS4gWWV0IG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0K
RVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NzYuNjU2MCBUZA0KKCBBbmQgbW9yZSB0
ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQg
bW9yZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY2NC43MDQwIFRkDQoo
IHRleHQuIE9oLCBob3cgYm9yaW5nIHR5cGluZyB0aGlzIHN0dWZmLiBCdXQgbm90IGFzIGJv
cmluZyBhcyB3YXRjaGluZyApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY1
Mi43NTIwIFRkDQooIHBhaW50IGRyeS4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4g
QW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBU
Zg0KNjkuMjUwMCA2NDAuODAwMCBUZA0KKCBCb3JpbmcuICBNb3JlLCBhIGxpdHRsZSBtb3Jl
IHRleHQuIFRoZSBlbmQsIGFuZCBqdXN0IGFzIHdlbGwuICkgVGoNCkVUDQplbmRzdHJlYW0N
CmVuZG9iag0KDQo4IDAgb2JqDQpbL1BERiAvVGV4dF0NCmVuZG9iag0KDQo5IDAgb2JqDQo8
PA0KL1R5cGUgL0ZvbnQNCi9TdWJ0eXBlIC9UeXBlMQ0KL05hbWUgL0YxDQovQmFzZUZvbnQg
L0hlbHZldGljYQ0KL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcNCj4+DQplbmRvYmoNCg0K
MTAgMCBvYmoNCjw8DQovQ3JlYXRvciAoUmF2ZSBcKGh0dHA6Ly93d3cubmV2cm9uYS5jb20v
cmF2ZVwpKQ0KL1Byb2R1Y2VyIChOZXZyb25hIERlc2lnbnMpDQovQ3JlYXRpb25EYXRlIChE
OjIwMDYwMzAxMDcyODI2KQ0KPj4NCmVuZG9iag0KDQp4cmVmDQowIDExDQowMDAwMDAwMDAw
IDY1NTM1IGYNCjAwMDAwMDAwMTkgMDAwMDAgbg0KMDAwMDAwMDA5MyAwMDAwMCBuDQowMDAw
MDAwMTQ3IDAwMDAwIG4NCjAwMDAwMDAyMjIgMDAwMDAgbg0KMDAwMDAwMDM5MCAwMDAwMCBu
DQowMDAwMDAxNTIyIDAwMDAwIG4NCjAwMDAwMDE2OTAgMDAwMDAgbg0KMDAwMDAwMjQyMyAw
MDAwMCBuDQowMDAwMDAyNDU2IDAwMDAwIG4NCjAwMDAwMDI1NzQgMDAwMDAgbg0KDQp0cmFp
bGVyDQo8PA0KL1NpemUgMTENCi9Sb290IDEgMCBSDQovSW5mbyAxMCAwIFINCj4+DQoNCnN0
YXJ0eHJlZg0KMjcxNA0KJSVFT0YNCg==`)

pdfjsLib.GlobalWorkerOptions.workerSrc = 
	'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.4.456/pdf.worker.js'

// stores refernce to pdf pages
let pdfPageViews = []

// setup browser storage
let db = new PouchDB('pdf_db')

// define default annotation types
let annTypes = [{
	id: 1,
	title: 'type 1',
	color: '#EEB20033'
}, {
	id: 2,
	title: 'type 2',
	color: '#EE740033'
}, {
	id: 3,
	title: 'type 3',
	color: '#009DEE33'
}, {
	id: 4,
	title: 'type 4',
	color: '#1FEE0033'
}]

// generate new id for annotation type
const genId = () => annTypes[annTypes.length - 1].id + 1

// get annotation type from id
const getAnnType = id => annTypes.find(a => a.id == id)

// gets the color for the given annotation type
const getAnnColor = id => annTypes.find(a => a.id == id).color

// update the annotation type at given id
const setAnnType = (id, annType) => {
	let i = annTypes.findIndex(a => a.id == id)
	
	if (i < 0) {
		annTypes.push(annType)
	} else {		
		annTypes[i] = annType
	}
	updateAnnTypes()
}

// delete annotation type with id
const removeAnnType = id => {
	let i = annTypes.findIndex(a => a.id == id)
	
	annTypes.splice(i, 1)
	
	updateAnnTypes()
}

// update annotation types in the store
const updateAnnTypes = () => {
	db.get('annotation_settings').then(result => {
		db.put({
			...result,
			types: annTypes
		}).catch(err => {
		})
	}).catch(err => {
		// ignore
	})
}

// creates a new table row in annotation config view
const createAnnotationTypeRow = type => {
	let newTableRow = document.getElementById('hidden_row').cloneNode(true)
	newTableRow.className = 'annotationTypeRow'
	newTableRow.id = 'ann_row' + type.id
	newTableRow.style.background = type.color
	
	let typeTitle = newTableRow.querySelector('.type_title')
	typeTitle.innerHTML = type.title
	typeTitle.onkeydown = e => {
		if (e.key === "Enter") {
			e.preventDefault()
			
			let vale = typeTitle.innerHTML
			
			if (annTypes.some(aT => vale == aT.title && type.id != aT.id)) {
				typeTitle.innerHTML = type.title
				alert("Multiple annotations cannot have same title")
			} else {
				let updatedType = getAnnType(type.id)			
				updatedType.title = typeTitle.innerHTML
				setAnnType(type.id, updatedType)
				
				// drop down needs to be updated explicitly
				let optionEle = document.getElementById(`option_${updatedType.id}`)
				optionEle.outerHTML = `<option id='option_${updatedType.id}' value='${updatedType.id}' style='background-color: ${updatedType.color}'>${updatedType.title}</option>`

				updateAnnotationLayer()
			}
			
			typeTitle.blur()
		}
	}
	typeTitle.onblur = () => {
		typeTitle.innerHTML = getAnnType(type.id).title
	}
	
	let typeColor = newTableRow.querySelector('.type_color').firstChild
	typeColor.value = type.color.substring(0, type.color.length - 2)
	typeColor.style.width='80%'
	typeColor.style.marginLeft = '8px'
	typeColor.oninput = e => {
		let updatedType = getAnnType(type.id)
		updatedType.color = e.target.value + '33'
		newTableRow.style.background = updatedType.color
		
		setAnnType(updatedType.id, updatedType)
		
		// drop down needs to be updated explicitly
		let optionEle = document.getElementById(`option_${updatedType.id}`)
		optionEle.outerHTML = `<option id='option_${updatedType.id}' value='${updatedType.id}' style='background-color: ${updatedType.color}'>${updatedType.title}</option>`

		updateAnnotationLayer()
	}
	
	let typeRemove = newTableRow.querySelector('.type_remove').firstChild
	typeRemove.href = `javascript:onRemoveAnnotationType(${type.id})`
	
	return newTableRow
}

// called when 'Add' button is clicked in annotation type configuration
const onAddAnnotationType = () => {
	let annoType = {
		id: genId(),
		title: null,
		color: '#EEB20033',
	}
	
	annoType.title = window.prompt('Enter annotation title')
	if (!annoType.title) return
	
	if (annTypes.some(aT => annoType.title == aT.title)) {
		alert("Multiple annotations cannot have same title")
		return
	}
	
	// add to drop down menu
	let annotationSelect = document.getElementById('annotationDialog')
	annotationSelect.innerHTML += `<option id='option_${annoType.id}' value='${annoType.id}' style='background-color: ${annoType.color}'>${annoType.title}</option>`
	
	// add to config table
	let annotationTypeTable = document.getElementById('annotationTypeTable')
	annotationTypeTable.appendChild(createAnnotationTypeRow(annoType))
	
	// updates in local variable and store
	setAnnType(annoType.id, annoType)
}

// called when 'Remove' button is clicked in annotation type configuration row
const onRemoveAnnotationType = id => {
	removeAnnType(id)
	
	// remove from config table
	let newTableRow = document.getElementById('ann_row' + id)
	newTableRow.parentElement.removeChild(newTableRow)
	
	// remove from drop down
	let optionValue = document.getElementById('option_' + id)
	optionValue.parentElement.removeChild(optionValue)
	
	// delete the already annotated text with the id being deleted
	db.get('annotation_store').then(result => {
		result.annotations = result.annotations.filter(annotation => annotation.type != id)
		
		db.put(result).then(() => {
			updateAnnotationLayer()
		})
	})
}

const onLoad = () => {
	db.get('annotation_settings').then(result => {
		if (!result.types) {
			db.put({
				_id: 'annotation_settings',
				types: annTypes
			})
		} else {
			annTypes = result.types
		}
		
		// populate annotation types in drop down
		let annotationSelect = document.getElementById('annotationDialog')
		annotationSelect.innerHTML = annTypes.map(type => `<option id='option_${type.id}' value='${type.id}' style='background-color: ${type.color}'>${type.title}</option>`).join('')
		
		// populate annotation types in config table
		let annotationTypeTable = document.getElementById('annotationTypeTable')
		annTypes.forEach(type => annotationTypeTable.appendChild(createAnnotationTypeRow(type)))
	}).catch(err => {
		db.put({
			_id: 'annotation_settings',
			types: annTypes
		})
		
		// populate annotation types in drop down
		let annotationSelect = document.getElementById('annotationDialog')
		annotationSelect.innerHTML = annTypes.map(type => `<option id='option_${type.id}' value='${type.id}' style='background-color: ${type.color}'>${type.title}</option>`).join('')
		
		// populate annotation types in config table
		let annotationTypeTable = document.getElementById('annotationTypeTable')
		annTypes.forEach(type => annotationTypeTable.appendChild(createAnnotationTypeRow(type)))
	})
	
	// create empty annotation_store if it doesn't exist
	db.get('annotation_store').then(result => {}).catch(err => {
		db.put({
			_id: 'annotation_store',
			annotations: []
		})
	})
}

// converts to pdf coordinates in given page for storage
const fixBounds = (page, rect1, rect2) => {
	let p1 = page.viewport.convertToPdfPoint(rect2[0] - rect1[0], rect2[1] - rect1[1])
	let p2 = page.viewport.convertToPdfPoint(rect2[2] - rect1[0], rect2[3] - rect1[1])
	
	return [Math.min(p1[0], p2[0]), Math.min(p1[1], p2[1]), Math.max(p1[0], p2[0]), Math.max(p1[1], p2[1])]
}

// checks if two coordinates are equal
const coordsEqual = (c1, c2) => c1.every((c, i) => c == c2[i])

// checks if the list contains the given coordinates
const containsCoord = (cList, c) => cList.some(cc => coordsEqual(c, cc))

// associates selection rectangles with corresponding pages
const associatePages = (startPage, pRects, cList) => cList.map(c => ({
	page: (startPage + pRects.findIndex((p, i) => pRects[i][0] < c[0] && pRects[i][1] < c[1] && pRects[i][2] > c[2] && pRects[i][3] > c[3])),
	coords: c
}))

document.onselectionchange = () => {
	const annotationDialog = document.getElementById('annotationDialogOverlay')
	const selection = document.getSelection()
	
	if (selection.toString().length > 0) {
		let range = selection.getRangeAt(0)
		let startPage, endPage
		
		// find the start page and the end page of selection
		try {
			startPage = range.startContainer.parentElement.closest('.page').dataset.pageNumber - 1
			endPage = range.endContainer.parentElement.closest('.page').dataset.pageNumber - 1
		} catch {
			return
		}
		// get all the pages in selection
		let pages = Array.from({length: endPage - startPage + 1}, (x, i) => pdfPageViews[i + startPage])
		let pageRects = pages.map(page => page.canvas.getClientRects()[0])
							.map(pR => [pR.left, pR.top, pR.right, pR.bottom]) // convert to coord array
		
		// sanitize selection rectangles
		let selRects = [...range.getClientRects()]
				.map(pR => [pR.left, pR.top, pR.right, pR.bottom]) // convert to coord array
				.map(r => (r[0] != r[2] && r[1] != r[3]) ? r : null) // remove invisible rects
				.map(r => r != null && !containsCoord(pageRects, r) ? r : null) // remove full page rects
		
		// associate pdf pages with selection rectangles
		let finalRects = associatePages(startPage, pageRects, selRects.filter(r => r != null))
		
		// generates all unique pairs from array
		const generatePairs = (arr) => arr.map((v, i) => arr.slice(i + 1).map(w => [v, w]) ).flat();
		
		// check whether one rectangle is inside another
		const checkInside = (r1, r2) => !r1.every((r, i) => r2[i] === r) && 
			r1[0] == r2[0] && r1[1] >= r2[1] && r1[2] == r2[2] && r1[3] <= r2[3]
		
		
		let groupedRects = {}
		
		// group rectangles by page number
		finalRects.forEach((fR, fI) => {
			if (groupedRects[fR.page]) {
				groupedRects[fR.page].push(fR)
			} else {
				groupedRects[fR.page] = [fR]
			}
		})
		
		Object.values(groupedRects).map(fRx => {
			generatePairs(fRx).map(pair => [pair[0].coords, pair[1].coords]).forEach(pair => {
				// check if rectanlges are overlapping completely
				// then remove the bigger one (better visual)
				if (checkInside(pair[0], pair[1])) {
					finalRects = finalRects.filter(fr => !fr.coords.every((tr, i) => pair[1][i] == tr))
				} else if (checkInside(pair[1], pair[0])) {
					finalRects = finalRects.filter(fr => !fr.coords.every((tr, i) => pair[0][i] == tr))
				}
			})
		})

		if (annotationDialog != null) {
			annotationDialog.style.display = 'flex'
			annotationDialog.style.left = `${finalRects[0].coords[0] + window.scrollX}px`
			annotationDialog.style.top = `${finalRects[0].coords[1] + window.scrollY - annotationDialog.clientHeight - 10}px`
		
			annotationDialog.dataset.rects = JSON.stringify(finalRects)
			annotationDialog.dataset.text = JSON.stringify(selection.toString())
		}
	} else {
		if (annotationDialog != null) {
			annotationDialog.style.display = 'none'
			annotationDialog.removeAttribute('data-rects')
			annotationDialog.removeAttribute('data-text')
		}
	}
}

// opens the pdf file in the viewer
const openPDF = (pdf_path) => {
	let pdf_viewer = document.getElementById('pageContainer')
	let loader = pdfjsLib.getDocument(pdf_path || {data: sample_pdf_data})
	
	loader.promise.then(pdf => {
		for (let i = 1; i <= pdf.numPages; i++) {
			pdf.getPage(i).then(page => {
				let container = pdf_viewer
				
				let scale = 1.0
				let viewport = page.getViewport({ scale: scale })
				
				pdfPageView = new pdfjsViewer.PDFPageView({
					container,
					id: i,
					scale,
					defaultViewport: viewport,
					eventBus: new pdfjsViewer.EventBus(),
					textLayerFactory: new pdfjsViewer.DefaultTextLayerFactory()
				});
				
				pdfPageView.setPdfPage(page)
				pdfPageViews.push(pdfPageView)
				pdfPageView.draw()
				
				// render the annotation layer after rendering the last page
				if (i == pdf.numPages)
					updateAnnotationLayer()
			})
		}
	})
}

// renders the annotation layer
const updateAnnotationLayer = () => {
	// gets the current annotations
	let old_annotations = document.getElementsByClassName('annotation_element');
	
	// removes all the current annotations
	while(old_annotations[0]) {
		old_annotations[0].parentNode.removeChild(old_annotations[0])
	}
	
	let i = 0
	
	// get the annotations from browser store
	db.get('annotation_store').then(result =>
		result.annotations.forEach(annotation => 
			annotation.data.forEach(annElement => {
				let page = pdfPageViews[annElement.page]
				let pageElement = page.canvas.parentElement;
				
				let viewport = page.viewport;
				let bounds = viewport.convertToViewportRectangle(annElement.coords);
				
				// empty highlight div
				let el = document.createElement('div');
				
				el.className = 'annotation_element'
				el.id = 'annotation' + i++
				
				el.style.position = 'absolute'
				el.style.background = getAnnColor(annotation.type) || '#00000000'
				el.style.left = Math.min(bounds[0], bounds[2]) + 'px'
				el.style.top = Math.min(bounds[1], bounds[3]) + 'px'
				el.style.width = Math.abs(bounds[0] - bounds[2]) + 'px'
				el.style.height = Math.abs(bounds[1] - bounds[3]) + 'px'

				pageElement.appendChild(el);
			})
		)
	)
}

// called when the 'Set' button is pressed after selecting the dropdown
const onAnnotationSet = () => {
	let annDialogOverlay = document.getElementById('annotationDialogOverlay')
	let annDialog = document.getElementById('annotationDialog')
	
	let data = JSON.parse(annDialogOverlay.dataset.rects)
	let text = JSON.parse(annDialogOverlay.dataset.text)
	data.forEach((annElement, i) => {
		let page = pdfPageViews[annElement.page]
		let pageRect = page.canvas.getClientRects()[0]
		
		annElement.coords = fixBounds(page, [pageRect.left, pageRect.top, pageRect.right, pageRect.bottom], annElement.coords)
	})
	
	db.get('annotation_store').then(result => {
		result.annotations = [...result.annotations, { type: annDialog.value, data, text }]
		db.put(result).then(() => updateAnnotationLayer())
	}).catch(err => {
		db.put({
			_id: 'annotation_store',
			annotations: [{ type: annDialog.value, data, text }]
		}).then(() => {
			updateAnnotationLayer()
		})
	})
	
	document.getSelection().empty()
}