export const getIconsFromMIME = (mimeType: string): string => {
	// List of official MIME Types: http://www.iana.org/assignments/media-types/media-types.xhtml
	const icon_classes = {
		// Media
		'audio/aac': 'aac.png',
		'audio/aiff': 'aiff.png',
		'video/x-msvideo': 'avi.png',
		'image/jpeg': 'jpg.png',
		'image/png': 'png.png',
		'image/bmp': 'bmp.png',
		'image/vnd.dwg': 'dwg.png',
		'image/vnd.dxf': 'dxf.png',
		'application/postscript': 'ai.png',
		'application/x-msdownload': 'exe.png',
		'video/x-flv': 'flv.png',
		'image/gif': 'gif.png',
		'image/x-icon': 'ico.png',
		'audio/midi': 'midi.png',
		'audio/mpeg': 'mp3.png',
		'video/mpeg': 'mpeg.png',
		'video/mp4': 'mp4.png',
		'image/vnd.adobe.photoshop': 'psd.png',
		'video/quicktime': 'qt.png',
		'image/tiff': 'tiff.png',
		'image/svg+xml': 'svg.png',
		'audio/vnd.wav': 'wav.png',

		// Documents
		'application/pdf': 'pdf.png',
		'text/plain': 'txt.png',
		'text/x-c': 'c.png',
		'text/css': 'css.png',
		'text/csv': 'csv.png',
		'application/msword': 'doc.png',
		'application/vnd.openxmlformats-officedocument.wordprocessingml.document': 'docx.png',
		'application/vnd.openxmlformats-officedocument.wordprocessingml.template': 'dotx.png',
		'text/html': 'html.png',
		'text/calendar': 'ics.png',
		'application/x-iso9660-image': 'iso.png',
		'text/x-java-source': 'java.png',
		'text/javascript': 'js.png',
		'application/json': 'json.png',
		'text/x-markdown': 'md.png',
		'application/vnd.oasis.opendocument.formula': 'odf.png',
		'application/vnd.oasis.opendocument.graphics': 'odg.png',
		'application/vnd.oasis.opendocument.spreadsheet': 'ods.png',
		'application/vnd.oasis.opendocument.text': 'odt.png',
		'application/x-font-otf': 'otf.png',
		'application/vnd.oasis.opendocument.presentation-template': 'otp.png',
		'application/vnd.oasis.opendocument.spreadsheet-template': 'ots.png',
		'application/vnd.oasis.opendocument.text-template': 'ott.png',
		'application/x-httpd-php': 'php.png',
		'application/vnd.ms-powerpoint': 'ppt.png',
		'application/vnd.openxmlformats-officedocument.presentationml.presentation': 'pptx.png',
		'text/x-python': 'py.png',
		'application/rtf': 'rtf.png',
		'application/vnd.ms-excel': 'xls.png',
		'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 'xlsx.png',
		'application/xml': 'xml.png',
		'application/rss+xml': 'xml.png',
		'application/yaml': 'yml.png',
		
		// Archives
		'application/x-7z-compressed': '7z.png',
		'application/gzip': 'gzip.png',
		'application/vnd.rar': 'rar.png',
		'application/zip': 'zip.png',
		'application/x-zip-compressed': 'zip.png',
		'application/zip-compressed': 'zip.png'

	};

	const mime = icon_classes[mimeType as keyof typeof icon_classes];

	if (mime) {
		return mime;
	}
	// for (let key in icon_classes) {
	//   if (icon_classes.hasOwnProperty(key)) {
	//     if (mimeType.search(key) === 0) {
	//       // Found it
	// 			// @ts-ignore
	//       return icon_classes[key];
	//     }
	//   } 
	// }

	return '_blank.png'
}