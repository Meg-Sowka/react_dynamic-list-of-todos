(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(5),a=c.n(s),n=c(2),l=c(1),i=(c(10),c(11),c(3)),d=c.n(i),o=c(0),r=function(e){var t=e.todos,c=e.selectedTodo,s=e.handleSelectedTodo;return Object(o.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"#"}),Object(o.jsx)("th",{children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("th",{children:"Title"}),Object(o.jsx)("th",{children:" "})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{"data-cy":"todo",className:d()({"has-background-info-light":c===e}),children:[Object(o.jsx)("td",{className:"is-vcentered",children:e.id}),Object(o.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(o.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(o.jsx)("i",{className:"fas fa-check"})})}),Object(o.jsx)("td",{className:"is-vcentered is-expanded",children:Object(o.jsx)("p",{className:d()({"has-text-danger":!e.completed,"has-text-success":!!e.completed}),children:e.title})}),Object(o.jsx)("td",{className:"has-text-right is-vcentered",children:Object(o.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return s(e)},children:Object(o.jsx)("span",{className:"icon",children:Object(o.jsx)("i",{className:d()("far",{"fa-eye":(null===c||void 0===c?void 0:c.id)!==e.id,"fa-eye-slash":(null===c||void 0===c?void 0:c.id)===e.id})})})})})]},e.id)}))})]})},j=function(e){var t=e.titleFilter,c=e.statusFilter,s=e.handleTitleFilterChange,a=e.handleStatusFilterChange;return Object(o.jsxs)("form",{className:"field has-addons",children:[Object(o.jsx)("p",{className:"control",children:Object(o.jsx)("span",{className:"select",children:Object(o.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){return a(e.target.value)},children:[Object(o.jsx)("option",{value:"all",children:"All"}),Object(o.jsx)("option",{value:"active",children:"Active"}),Object(o.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(o.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(o.jsx)("input",{value:t,onChange:function(e){return s(e.target.value)},"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search..."}),Object(o.jsx)("span",{className:"icon is-left",children:Object(o.jsx)("i",{className:"fas fa-magnifying-glass"})}),t&&Object(o.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(o.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return s("")}})})]})]})},h=(c(13),function(){return Object(o.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(o.jsx)("div",{className:"Loader__content"})})});function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var b=function(e){var t=Object(l.useState)(null),c=Object(n.a)(t,2),s=c[0],a=c[1],i=Object(l.useState)(!0),d=Object(n.a)(i,2),o=d[0],r=d[1];return Object(l.useEffect)((function(){r(!0),function(e){return u("/users/".concat(e))}(e).then((function(e){a(e),r(!1)}))}),[e]),{user:s,isLoading:o}},m=function(e){var t=e.selectedTodo,c=e.handleClose,s=b(t.userId),a=s.user,n=s.isLoading;return Object(o.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(o.jsx)("div",{className:"modal-background"}),n?Object(o.jsx)(h,{}):Object(o.jsxs)("div",{className:"modal-card",children:[Object(o.jsxs)("header",{className:"modal-card-head",children:[Object(o.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(o.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(o.jsxs)("div",{className:"modal-card-body",children:[Object(o.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(o.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed&&Object(o.jsx)("strong",{className:"has-text-success",children:"Done"}),!t.completed&&Object(o.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(o.jsx)("a",{href:"mailto:".concat(null===a||void 0===a?void 0:a.email),children:null===a||void 0===a?void 0:a.name})]})]})]})]})},O=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(!0),i=Object(n.a)(a,2),d=i[0],o=i[1];return Object(l.useEffect)((function(){u("/todos").then((function(e){s(e),o(!1)}))}),[]),{todos:c,isLoading:d}},x=function(){var e=O(),t=e.todos,c=e.isLoading,s=Object(l.useState)(null),a=Object(n.a)(s,2),i=a[0],d=a[1],u=Object(l.useState)(""),b=Object(n.a)(u,2),x=b[0],f=b[1],v=Object(l.useState)("all"),p=Object(n.a)(v,2),N=p[0],g=p[1],y=Object(l.useMemo)((function(){return t.filter((function(e){return!!e.title.toLocaleLowerCase().includes(x.toLocaleLowerCase())&&(("active"!==N||!e.completed)&&!("completed"===N&&!e.completed))}))}),[t,x,N]);return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"section",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"box",children:[Object(o.jsx)("h1",{className:"title",children:"Todos:"}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(j,{titleFilter:x,statusFilter:N,handleTitleFilterChange:f,handleStatusFilterChange:g})}),Object(o.jsxs)("div",{className:"block",children:[c&&Object(o.jsx)(h,{}),!c&&Object(o.jsx)(r,{todos:y,handleSelectedTodo:d,selectedTodo:i})]})]})})}),i&&Object(o.jsx)(m,{selectedTodo:i,handleClose:function(){return d(null)}})]})};a.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.b30577ae.chunk.js.map