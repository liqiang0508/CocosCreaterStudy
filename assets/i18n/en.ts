const win = window as any
export const languages = {
	"2001":"Hello",
	"2002":"Chinese",
	"2003":"sixsixsix",
	"2004":"two",
	"2005":"five",
	"2006":"six",
	"2007":"seven",
}
if(!win.languages){
	win.languages = {};
}
win.languages.en= languages;