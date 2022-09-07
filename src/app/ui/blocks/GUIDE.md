## SHARED UI MODULES GUIDELINE

This directory will contains shared UI dump component only modules. These module are similar as shared modules but these are for UI block components. These module can be created via angular client as:

``
ng g m ui/blocks/module-name
ng g c ui/blocks/module-name --export
ng g c ui/blocks/module-name/component-name --export
``

Please keep related components only in a module, don't create shared module with too much components in it. Conditions allow components can be same module:
- [x] These components are **always** used together in top level components.
- [x] These components are UI variants of each others.
