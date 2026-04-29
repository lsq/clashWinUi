module.exports = (e, t, i) => {
  "use strict";

  i.d(t, {
    G1: () => v,
    IP: () => l,
    Uh: () => _
  });
  var n = i(4669),
    o = i(98401),
    s = i(63580),
    r = i(81294),
    a = i(89872);
  const l = {
      Configuration: "base.contributions.configuration"
    },
    c = {
      properties: {},
      patternProperties: {}
    },
    d = {
      properties: {},
      patternProperties: {}
    },
    h = {
      properties: {},
      patternProperties: {}
    },
    u = {
      properties: {},
      patternProperties: {}
    },
    g = {
      properties: {},
      patternProperties: {}
    },
    p = {
      properties: {},
      patternProperties: {}
    },
    f = "vscode://schemas/settings/resourceLanguage",
    m = a.B.as(r.I.JSONContribution);
  const v = new RegExp("\\[.*\\]$");
  function _(e) {
    return e.substring(1, e.length - 1);
  }
  const b = new (class {
    constructor() {
      ((this.overrideIdentifiers = new Set()), (this._onDidSchemaChange = new n.Q5()), (this._onDidUpdateConfiguration = new n.Q5()), (this.defaultValues = {}), (this.defaultLanguageConfigurationOverridesNode = {
        id: "defaultOverrides",
        title: s.N("defaultLanguageConfigurationOverrides.title", "Default Language Configuration Overrides"),
        properties: {}
      }), (this.configurationContributors = [this.defaultLanguageConfigurationOverridesNode]), (this.resourceLanguageSettingsSchema = {
        properties: {},
        patternProperties: {},
        additionalProperties: !1,
        errorMessage: "Unknown editor configuration setting",
        allowTrailingCommas: !0,
        allowComments: !0
      }), (this.configurationProperties = {}), (this.excludedConfigurationProperties = {}), m.registerSchema(f, this.resourceLanguageSettingsSchema));
    }
    registerConfiguration(e, t = !0) {
      this.registerConfigurations([e], t);
    }
    registerConfigurations(e, t = !0) {
      const i = this.doRegisterConfigurations(e, t);
      (m.registerSchema(f, this.resourceLanguageSettingsSchema), this._onDidSchemaChange.fire(), this._onDidUpdateConfiguration.fire(i));
    }
    registerOverrideIdentifiers(e) {
      for (const t of e) this.overrideIdentifiers.add(t);
      this.updateOverridePropertyPatternKey();
    }
    doRegisterConfigurations(e, t) {
      const i = [];
      return (e.forEach(e => {
        (i.push(...this.validateAndRegisterProperties(e, t, e.extensionInfo)), this.configurationContributors.push(e), this.registerJSONConfiguration(e));
      }), i);
    }
    validateAndRegisterProperties(e, t = !0, i, n = 3) {
      var s;
      n = o.Jp(e.scope) ? n : e.scope;
      let r = [],
        a = e.properties;
      if (a) for (let e in a) {
        if (t && w(e)) {
          delete a[e];
          continue;
        }
        const l = a[e];
        (this.updatePropertyDefaultValue(e, l), v.test(e) ? (l.scope = void 0) : ((l.scope = o.Jp(l.scope) ? n : l.scope), (l.restricted = o.Jp(l.restricted) ? !!(null === (s = null == i ? void 0 : i.restrictedConfigurations) || void 0 === s ? void 0 : s.includes(e)) : l.restricted)), !a[e].hasOwnProperty("included") || a[e].included ? ((this.configurationProperties[e] = a[e]), !a[e].deprecationMessage && a[e].markdownDeprecationMessage && (a[e].deprecationMessage = a[e].markdownDeprecationMessage), r.push(e)) : ((this.excludedConfigurationProperties[e] = a[e]), delete a[e]));
      }
      let l = e.allOf;
      if (l) for (let e of l) r.push(...this.validateAndRegisterProperties(e, t, i, n));
      return r;
    }
    getConfigurationProperties() {
      return this.configurationProperties;
    }
    registerJSONConfiguration(e) {
      const t = e => {
        let i = e.properties;
        if (i) for (const e in i) this.updateSchema(e, i[e]);
        let n = e.allOf;
        n && n.forEach(t);
      };
      t(e);
    }
    updateSchema(e, t) {
      switch (((c.properties[e] = t), t.scope)) {
        case 1:
          d.properties[e] = t;
          break;
        case 2:
          h.properties[e] = t;
          break;
        case 6:
          u.properties[e] = t;
          break;
        case 3:
          g.properties[e] = t;
          break;
        case 4:
          p.properties[e] = t;
          break;
        case 5:
          ((p.properties[e] = t), (this.resourceLanguageSettingsSchema.properties[e] = t));
      }
    }
    updateOverridePropertyPatternKey() {
      for (const e of this.overrideIdentifiers.values()) {
        const t = `[${e}]`,
          i = {
            type: "object",
            description: s.N("overrideSettings.defaultDescription", "Configure editor settings to be overridden for a language."),
            errorMessage: s.N("overrideSettings.errorMessage", "This setting does not support per-language configuration."),
            $ref: f
          };
        (this.updatePropertyDefaultValue(t, i), (c.properties[t] = i), (d.properties[t] = i), (h.properties[t] = i), (u.properties[t] = i), (g.properties[t] = i), (p.properties[t] = i));
      }
      this._onDidSchemaChange.fire();
    }
    updatePropertyDefaultValue(e, t) {
      let i = this.defaultValues[e];
      (o.o8(i) && (i = t.default), o.o8(i) && (i = (function (e) {
        switch (Array.isArray(e) ? e[0] : e) {
          case "boolean":
            return !1;
          case "integer":
          case "number":
            return 0;
          case "string":
            return "";
          case "array":
            return [];
          case "object":
            return {};
          default:
            return null;
        }
      })(t.type)), (t.default = i));
    }
  })();
  function w(e) {
    return e.trim() ? v.test(e) ? s.N("config.property.languageDefault", "Cannot register '{0}'. This matches property pattern '\\\\[.*\\\\]$' for describing language specific editor settings. Use 'configurationDefaults' contribution.", e) : void 0 !== b.getConfigurationProperties()[e] ? s.N("config.property.duplicate", "Cannot register '{0}'. This property is already registered.", e) : null : s.N("config.property.empty", "Cannot register an empty property");
  }
  a.B.add(l.Configuration, b);
};