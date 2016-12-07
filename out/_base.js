self.global=self;
(self.System=self.System||{}).import=function(n){n=n.replace(/\.js$/g,"")+".js";return (self._S["//"+n]&&Promise.resolve(self._S["//"+n]))||self._S[n]||(self._S[n]=new Promise(function(r,t){var s=document.createElement("script");s.src=(self.System.baseURL||".")+"/"+n.replace(/[\/\\]/g,"-");s.onerror=t;s.onload=function(){r(self._S["//"+n])};(document.head||document.documentElement).appendChild(s);}))};
(self._S=self._S||[]).push=function(f){f.call(self)};(function(f){while(f=self._S.shift()){f.call(self)}})();
//# sourceMappingURL=_base.js.map

