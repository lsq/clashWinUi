module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    Ks: () => u,
    q5: () => h,
    s_: () => m
  });
  var n = i(15393),
    o = i(73046),
    s = i(4669),
    r = i(63580),
    a = i(81294),
    l = i(89872),
    c = i(97781);
  const d = new (class {
    constructor() {
      ((this._onDidChange = new s.Q5()), (this.onDidChange = this._onDidChange.event), (this.iconSchema = {
        definitions: {
          icons: {
            type: "object",
            properties: {
              fontId: {
                type: "string",
                description: (0, r.N)("iconDefintion.fontId", "The id of the font to use. If not set, the font that is defined first is used.")
              },
              fontCharacter: {
                type: "string",
                description: (0, r.N)("iconDefintion.fontCharacter", "The font character associated with the icon definition.")
              }
            },
            additionalProperties: !1,
            defaultSnippets: [{
              body: {
                fontCharacter: "\\\\e030"
              }
            }]
          }
        },
        type: "object",
        properties: {}
      }), (this.iconReferenceSchema = {
        type: "string",
        pattern: `^${o.dT.iconNameExpression}$`,
        enum: [],
        enumDescriptions: []
      }), (this.iconsById = {}), (this.iconFontsById = {}));
    }
    registerIcon(e, t, i, n) {
      const o = this.iconsById[e];
      if (o) {
        if (i && !o.description) {
          ((o.description = i), (this.iconSchema.properties[e].markdownDescription = `${i} $(${e})`));
          const t = this.iconReferenceSchema.enum.indexOf(e);
          (-1 !== t && (this.iconReferenceSchema.enumDescriptions[t] = i), this._onDidChange.fire());
        }
        return o;
      }
      let s = {
        id: e,
        description: i,
        defaults: t,
        deprecationMessage: n
      };
      this.iconsById[e] = s;
      let r = {
        $ref: "#/definitions/icons"
      };
      return (n && (r.deprecationMessage = n), i && (r.markdownDescription = `${i}: $(${e})`), (this.iconSchema.properties[e] = r), this.iconReferenceSchema.enum.push(e), this.iconReferenceSchema.enumDescriptions.push(i || ""), this._onDidChange.fire(), {
        id: e
      });
    }
    getIcons() {
      return Object.keys(this.iconsById).map(e => this.iconsById[e]);
    }
    getIcon(e) {
      return this.iconsById[e];
    }
    getIconSchema() {
      return this.iconSchema;
    }
    getIconFont(e) {
      return this.iconFontsById[e];
    }
    toString() {
      const e = (e, t) => e.id.localeCompare(t.id),
        t = e => {
          for (; c.kS.isThemeIcon(e.defaults);) e = this.iconsById[e.defaults.id];
          return `codicon codicon-${e ? e.id : ""}`;
        };
      let i = [];
      (i.push("| preview     | identifier                        | default codicon ID                | description"), i.push("| ----------- | --------------------------------- | --------------------------------- | --------------------------------- |"));
      const n = Object.keys(this.iconsById).map(e => this.iconsById[e]);
      for (const o of n.filter(e => !!e.description).sort(e)) i.push(`|<i class="${t(o)}"></i>|${o.id}|${c.kS.isThemeIcon(o.defaults) ? o.defaults.id : o.id}|${o.description || ""}|`);
      (i.push("| preview     | identifier                        "), i.push("| ----------- | --------------------------------- |"));
      for (const o of n.filter(e => !c.kS.isThemeIcon(e.defaults)).sort(e)) i.push(`|<i class="${t(o)}"></i>|${o.id}|`);
      return i.join("\n");
    }
  })();
  function h(e, t, i, n) {
    return d.registerIcon(e, t, i, n);
  }
  function u() {
    return d;
  }
  (l.B.add("base.contributions.icons", d), (function () {
    for (const e of o.fK.all) d.registerIcon(e.id, e.definition, e.description);
    o.fK.onDidRegister(e => d.registerIcon(e.id, e.definition, e.description));
  })());
  const g = "vscode://schemas/icons";
  let p = l.B.as(a.I.JSONContribution);
  p.registerSchema(g, d.getIconSchema());
  const f = new n.pY(() => p.notifySchemaChanged(g), 200);
  d.onDidChange(() => {
    f.isScheduled() || f.schedule();
  });
  const m = h("widget-close", o.lA.close, (0, r.N)("widgetClose", "Icon for the close action in widgets."));
};