module.exports = (e, t, i) => {
  "use strict";

  var n = i(73046),
    o = i(63580),
    s = i(73910),
    r = i(97781);
  const a = (0, s.P6)("symbolIcon.arrayForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.arrayForeground", "The foreground color for array symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    l = (0, s.P6)("symbolIcon.booleanForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.booleanForeground", "The foreground color for boolean symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    c = (0, s.P6)("symbolIcon.classForeground", {
      dark: "#EE9D28",
      light: "#D67E00",
      hc: "#EE9D28"
    }, (0, o.N)("symbolIcon.classForeground", "The foreground color for class symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    d = (0, s.P6)("symbolIcon.colorForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.colorForeground", "The foreground color for color symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    h = (0, s.P6)("symbolIcon.constantForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.constantForeground", "The foreground color for constant symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    u = (0, s.P6)("symbolIcon.constructorForeground", {
      dark: "#B180D7",
      light: "#652D90",
      hc: "#B180D7"
    }, (0, o.N)("symbolIcon.constructorForeground", "The foreground color for constructor symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    g = (0, s.P6)("symbolIcon.enumeratorForeground", {
      dark: "#EE9D28",
      light: "#D67E00",
      hc: "#EE9D28"
    }, (0, o.N)("symbolIcon.enumeratorForeground", "The foreground color for enumerator symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    p = (0, s.P6)("symbolIcon.enumeratorMemberForeground", {
      dark: "#75BEFF",
      light: "#007ACC",
      hc: "#75BEFF"
    }, (0, o.N)("symbolIcon.enumeratorMemberForeground", "The foreground color for enumerator member symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    f = (0, s.P6)("symbolIcon.eventForeground", {
      dark: "#EE9D28",
      light: "#D67E00",
      hc: "#EE9D28"
    }, (0, o.N)("symbolIcon.eventForeground", "The foreground color for event symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    m = (0, s.P6)("symbolIcon.fieldForeground", {
      dark: "#75BEFF",
      light: "#007ACC",
      hc: "#75BEFF"
    }, (0, o.N)("symbolIcon.fieldForeground", "The foreground color for field symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    v = (0, s.P6)("symbolIcon.fileForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.fileForeground", "The foreground color for file symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    _ = (0, s.P6)("symbolIcon.folderForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.folderForeground", "The foreground color for folder symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    b = (0, s.P6)("symbolIcon.functionForeground", {
      dark: "#B180D7",
      light: "#652D90",
      hc: "#B180D7"
    }, (0, o.N)("symbolIcon.functionForeground", "The foreground color for function symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    w = (0, s.P6)("symbolIcon.interfaceForeground", {
      dark: "#75BEFF",
      light: "#007ACC",
      hc: "#75BEFF"
    }, (0, o.N)("symbolIcon.interfaceForeground", "The foreground color for interface symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    y = (0, s.P6)("symbolIcon.keyForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.keyForeground", "The foreground color for key symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    C = (0, s.P6)("symbolIcon.keywordForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.keywordForeground", "The foreground color for keyword symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    x = (0, s.P6)("symbolIcon.methodForeground", {
      dark: "#B180D7",
      light: "#652D90",
      hc: "#B180D7"
    }, (0, o.N)("symbolIcon.methodForeground", "The foreground color for method symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    S = (0, s.P6)("symbolIcon.moduleForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.moduleForeground", "The foreground color for module symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    k = (0, s.P6)("symbolIcon.namespaceForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.namespaceForeground", "The foreground color for namespace symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    L = (0, s.P6)("symbolIcon.nullForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.nullForeground", "The foreground color for null symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    N = (0, s.P6)("symbolIcon.numberForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.numberForeground", "The foreground color for number symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    D = (0, s.P6)("symbolIcon.objectForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.objectForeground", "The foreground color for object symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    I = (0, s.P6)("symbolIcon.operatorForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.operatorForeground", "The foreground color for operator symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    E = (0, s.P6)("symbolIcon.packageForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.packageForeground", "The foreground color for package symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    T = (0, s.P6)("symbolIcon.propertyForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.propertyForeground", "The foreground color for property symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    M = (0, s.P6)("symbolIcon.referenceForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.referenceForeground", "The foreground color for reference symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    A = (0, s.P6)("symbolIcon.snippetForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.snippetForeground", "The foreground color for snippet symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    O = (0, s.P6)("symbolIcon.stringForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.stringForeground", "The foreground color for string symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    P = (0, s.P6)("symbolIcon.structForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.structForeground", "The foreground color for struct symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    R = (0, s.P6)("symbolIcon.textForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.textForeground", "The foreground color for text symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    F = (0, s.P6)("symbolIcon.typeParameterForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.typeParameterForeground", "The foreground color for type parameter symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    B = (0, s.P6)("symbolIcon.unitForeground", {
      dark: s.dR,
      light: s.dR,
      hc: s.dR
    }, (0, o.N)("symbolIcon.unitForeground", "The foreground color for unit symbols. These symbols appear in the outline, breadcrumb, and suggest widget.")),
    V = (0, s.P6)("symbolIcon.variableForeground", {
      dark: "#75BEFF",
      light: "#007ACC",
      hc: "#75BEFF"
    }, (0, o.N)("symbolIcon.variableForeground", "The foreground color for variable symbols. These symbols appear in the outline, breadcrumb, and suggest widget."));
  (0, r.Ic)((e, t) => {
    const i = e.getColor(a);
    i && t.addRule(`${n.lA.symbolArray.cssSelector} { color: ${i}; }`);
    const o = e.getColor(l);
    o && t.addRule(`${n.lA.symbolBoolean.cssSelector} { color: ${o}; }`);
    const s = e.getColor(c);
    s && t.addRule(`${n.lA.symbolClass.cssSelector} { color: ${s}; }`);
    const r = e.getColor(x);
    r && t.addRule(`${n.lA.symbolMethod.cssSelector} { color: ${r}; }`);
    const W = e.getColor(d);
    W && t.addRule(`${n.lA.symbolColor.cssSelector} { color: ${W}; }`);
    const H = e.getColor(h);
    H && t.addRule(`${n.lA.symbolConstant.cssSelector} { color: ${H}; }`);
    const z = e.getColor(u);
    z && t.addRule(`${n.lA.symbolConstructor.cssSelector} { color: ${z}; }`);
    const j = e.getColor(g);
    j && t.addRule(`\n\t\t\t${n.lA.symbolValue.cssSelector},${n.lA.symbolEnum.cssSelector} { color: ${j}; }`);
    const U = e.getColor(p);
    U && t.addRule(`${n.lA.symbolEnumMember.cssSelector} { color: ${U}; }`);
    const $ = e.getColor(f);
    $ && t.addRule(`${n.lA.symbolEvent.cssSelector} { color: ${$}; }`);
    const K = e.getColor(m);
    K && t.addRule(`${n.lA.symbolField.cssSelector} { color: ${K}; }`);
    const q = e.getColor(v);
    q && t.addRule(`${n.lA.symbolFile.cssSelector} { color: ${q}; }`);
    const Z = e.getColor(_);
    Z && t.addRule(`${n.lA.symbolFolder.cssSelector} { color: ${Z}; }`);
    const G = e.getColor(b);
    G && t.addRule(`${n.lA.symbolFunction.cssSelector} { color: ${G}; }`);
    const Y = e.getColor(w);
    Y && t.addRule(`${n.lA.symbolInterface.cssSelector} { color: ${Y}; }`);
    const Q = e.getColor(y);
    Q && t.addRule(`${n.lA.symbolKey.cssSelector} { color: ${Q}; }`);
    const X = e.getColor(C);
    X && t.addRule(`${n.lA.symbolKeyword.cssSelector} { color: ${X}; }`);
    const J = e.getColor(S);
    J && t.addRule(`${n.lA.symbolModule.cssSelector} { color: ${J}; }`);
    const ee = e.getColor(k);
    ee && t.addRule(`${n.lA.symbolNamespace.cssSelector} { color: ${ee}; }`);
    const te = e.getColor(L);
    te && t.addRule(`${n.lA.symbolNull.cssSelector} { color: ${te}; }`);
    const ie = e.getColor(N);
    ie && t.addRule(`${n.lA.symbolNumber.cssSelector} { color: ${ie}; }`);
    const ne = e.getColor(D);
    ne && t.addRule(`${n.lA.symbolObject.cssSelector} { color: ${ne}; }`);
    const oe = e.getColor(I);
    oe && t.addRule(`${n.lA.symbolOperator.cssSelector} { color: ${oe}; }`);
    const se = e.getColor(E);
    se && t.addRule(`${n.lA.symbolPackage.cssSelector} { color: ${se}; }`);
    const re = e.getColor(T);
    re && t.addRule(`${n.lA.symbolProperty.cssSelector} { color: ${re}; }`);
    const ae = e.getColor(M);
    ae && t.addRule(`${n.lA.symbolReference.cssSelector} { color: ${ae}; }`);
    const le = e.getColor(A);
    le && t.addRule(`${n.lA.symbolSnippet.cssSelector} { color: ${le}; }`);
    const ce = e.getColor(O);
    ce && t.addRule(`${n.lA.symbolString.cssSelector} { color: ${ce}; }`);
    const de = e.getColor(P);
    de && t.addRule(`${n.lA.symbolStruct.cssSelector} { color: ${de}; }`);
    const he = e.getColor(R);
    he && t.addRule(`${n.lA.symbolText.cssSelector} { color: ${he}; }`);
    const ue = e.getColor(F);
    ue && t.addRule(`${n.lA.symbolTypeParameter.cssSelector} { color: ${ue}; }`);
    const ge = e.getColor(B);
    ge && t.addRule(`${n.lA.symbolUnit.cssSelector} { color: ${ge}; }`);
    const pe = e.getColor(V);
    pe && t.addRule(`${n.lA.symbolVariable.cssSelector} { color: ${pe}; }`);
  });
};