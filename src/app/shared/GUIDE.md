## SHARED MODULES GUIDELINE

This directory will contains shared component/directive/pipe modules. These module can be created via angular client as:

``
ng g m shared/module-name
ng g c shared/module-name --export
ng g c shared/module-name/component-name --export
ng g p shared/module-name/pipe-name --export
``

**For shared component(s)/directive(s)/pipe(s) in same module:** Please keep related components only in a module, don't create shared module with too much components in it. Conditions allow components can be same module:
- [x] These component(s)/directive(s)/pipe(s) are parent-child related or be used by each others. If there is one component/directive/pipe can be used by a component/directive outside current module, please consider split it out as a separate shared module.
- [x] These components **always** use together in top level components.
- [x] These components are UI variants of each others.
