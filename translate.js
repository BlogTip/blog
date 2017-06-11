	google.load("language", "1");

	function ltrim(str) { 
		for(var k = 0; k < str.length && isWhitespace(str.charAt(k)); k++);
		return str.substring(k, str.length);
	}
	function rtrim(str) {
		for(var j=str.length-1; j>=0 && isWhitespace(str.charAt(j)) ; j--) ;
		return str.substring(0,j+1);
	}
	function trim(str) {
		return ltrim(rtrim(str));
	}
	function isWhitespace(charToCheck) {
		var whitespaceChars = " \t\n\r\f";
		return (whitespaceChars.indexOf(charToCheck) != -1);
	}
	function googletran(intext,flang,tlang,cfunc)
	{
//		google.language.translate(intext, flang, tlang, showresult);
	
		var source = intext;
		var result = source.split('\n');
		for (var i in result)
		{
			var x = trim(result[i]);
			if (x.length > 0)
			{		
				google.language.translate(x, flang, tlang, showresult);
			}
		}
	}

function showresult(result) {
		if (!result.error) {
			var container = document.getElementById("result");
			if (container.innerHTML.indexOf('Đang') > 0)
			{
				container.innerHTML = "";
			}
			container.innerHTML = container.innerHTML+result.translation+'<br /><br />';
		}
	}

	function doTranslationAll()
	{
			document.getElementById("result").innerHTML= "<center><b>Đang tiến hành dịch, bạn vui lòng đợi chút...</b></center>";
			document.getElementById("resultDiv1").style.display="";
			document.getElementById("resultDiv2").style.display="none";
			var inputtext = document.getElementById("originaltextall").value;
			var testlang = inputtext.substring(0,300);
			var fromlanguage = document.getElementById("sourcelanguageall").value;
			var tolanguage = document.getElementById("targetlanguageall").value;
			if (tolanguage == '')
			{
				if (fromlanguage == '')
				{
					google.language.detect(testlang, function (result) {
					//If language = English, translate into Vietnamese
					if (result.language == 'en') {
						tolanguage = 'vi';
						evtran();
					}
					else
					{
						tolanguage = 'en';
						if (result.language == 'vi')
						{
							evtran();
						}
					}
					googletran(inputtext, result.language, tolanguage, showresult);
					});
				}
				else
				{
					if (fromlanguage == 'en') {
						tolanguage = 'vi';
					}
					else
					{
						tolanguage = 'en';
					}
					googletran(inputtext, fromlanguage, tolanguage, showresult);
					if ( ( (tolanguage = 'en') && (fromlanguage == 'vi') ) || ( (tolanguage = 'vi') && (fromlanguage == 'en') ) )
					{
						evtran();
					}
				}
			}
			else
			{
				if (tolanguage == 'en')
				{
					if (fromlanguage == 'vi')
					{
						evtran();
					}
					if (fromlanguage == '')
					{
						google.language.detect(testlang, function (result) 
						{
							if (result.language == 'vi')
							{
								evtran();
							}
						});
					}
				}

				if (tolanguage == 'vi')
				{
					if (fromlanguage == 'en')
					{
						evtran();
					}
					if (fromlanguage == '')
					{
						google.language.detect(testlang, function (result) 
						{
							if (result.language == 'en')
							{
								evtran();
							}
						});
					}
				}

				googletran(inputtext, fromlanguage, tolanguage, showresult);
			}
	}

	function limitText(limitField, limitCount, limitNum) {
		if (limitField.value.length > limitNum) {
			limitField.value = limitField.value.substring(0, limitNum);
		} else {
			limitCount.value = limitNum - limitField.value.length;
		}
	}
	function evtran() {
	}