"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[255],{7255:(e,i,r)=>{r.r(i),r.d(i,{default:()=>A});var t=r(5043),s=r(3003),l=r(7128),n=r(6462),o=r(5865),a=r(1637),d=r(2110),c=r(6494),x=r(1906),p=r(6918),h=r(7392),u=r(5244),j=r(7466),v=r(1387),m=r(680),w=r(9951),g=r(8483),f=r(579);const A=()=>{const e=(0,s.wA)(),i=(0,n.Zp)(),r=(0,s.d4)((e=>e.makeup.products)),A=(0,s.d4)((e=>e.makeup.loading)),k=(0,s.d4)((e=>e.makeup.favorites)),y=(0,s.d4)((e=>e.makeup.error)),C=(0,s.d4)((e=>e.makeup.currentPage)),b=(0,s.d4)((e=>e.makeup.productsPerPage)),[S,P]=(0,t.useState)(1),[O,T]=(0,t.useState)(""),[_,E]=(0,t.useState)("all"),H=(0,s.d4)((e=>e.makeup.isLoaded));(0,t.useEffect)((()=>{const i=localStorage.getItem("products");i?e((0,l.K2)(JSON.parse(i))):H||e((0,l.E$)())}),[e,H]);const L=r.filter((e=>e.name.toLowerCase().includes(O.toLowerCase()))),M=L.filter((e=>k.includes(e.id))),N=C*b,$=N-b,D=L.slice($,N),F=S*b,Z=F-b,q=M.slice(Z,F),z=i=>{e((0,l.Tm)(i))},G=e=>{P(e)},I=e=>{E(e)},J=(0,w.A)(),K="/no-products-found.png";return(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{onClick:J,role:"button",style:{cursor:"pointer",margin:"10px 15px"},children:"Makeup Products"}),A&&(0,f.jsx)(a.A,{}),y&&(0,f.jsx)("p",{children:y}),(0,f.jsx)(m.A,{label:"Search Products",value:O,onChange:e=>{T(e.target.value),z(1)},sx:{margin:"auto 15px"}}),(0,f.jsx)(x.A,{onClick:()=>I("all"),variant:"all"===_?"contained":"outlined",sx:{m:2},children:"All Products"}),(0,f.jsx)(x.A,{onClick:()=>I("favorites"),variant:"favorites"===_?"contained":"outlined",children:"Favorite Products"}),(0,f.jsx)(p.A,{container:!0,spacing:3,sx:{m:2},children:("all"===_?D:q).map((r=>(0,f.jsx)(p.A,{size:{xs:12,sm:6,md:2},children:(0,f.jsxs)(d.A,{onClick:()=>{return e=r.id,void i(`/products/${e}`);var e},sx:{cursor:"pointer",maxWidth:300,minHeight:"400px",maxHeight:"550px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,f.jsx)("div",{style:{width:"100%",height:"400px",overflow:"hidden"},children:(0,f.jsx)("img",{src:r.image_link||K,alt:r.name,style:{width:"100%",maxHeight:"400",objectFit:"cover"},onError:e=>e.currentTarget.src=K})}),(0,f.jsxs)(c.A,{sx:{flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(g.A,{title:r.name,arrow:!0,children:(0,f.jsx)(o.A,{variant:"h6",sx:{height:"50px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.name})}),(0,f.jsx)(o.A,{variant:"body2",color:"textSecondary",sx:{height:"40px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:r.brand}),(0,f.jsx)(g.A,{title:r.price,arrow:!0,children:(0,f.jsxs)(o.A,{variant:"body1",sx:{height:"40px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["$",r.price]})}),(0,f.jsx)(o.A,{variant:"body2",color:"textSecondary",sx:{height:"20px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:r.product_type})]}),(0,f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"10px"},children:[(0,f.jsx)(h.A,{onClick:i=>{var t;i.stopPropagation(),t=r.id,e((0,l.dw)(t))},color:"primary",children:k.includes(r.id)?(0,f.jsx)(u.A,{}):(0,f.jsx)(j.A,{})}),(0,f.jsx)(h.A,{onClick:i=>{var t;i.stopPropagation(),t=r.id,e((0,l.qY)(t))},color:"secondary",children:(0,f.jsx)(v.A,{})})]})]})]})},r.id)))}),"all"===_?(0,f.jsxs)("div",{style:{margin:"0 15px"},children:[(0,f.jsx)(x.A,{onClick:()=>z(C-1),disabled:1===C,children:"Previous"}),(0,f.jsx)(x.A,{onClick:()=>z(C+1),disabled:C===Math.ceil(L.length/b),children:"Next"})]}):(0,f.jsxs)("div",{style:{margin:"0 15px"},children:[(0,f.jsx)(x.A,{onClick:()=>G(S-1),disabled:1===S,children:"Previous"}),(0,f.jsx)(x.A,{onClick:()=>G(S+1),disabled:S===Math.ceil(M.length/b),children:"Next"})]}),(0,f.jsx)("div",{style:{margin:"0 15px"},children:(0,f.jsx)(x.A,{onClick:()=>{i("/create-product")},children:"Create product"})})]})}},9951:(e,i,r)=>{r.d(i,{A:()=>n});var t=r(6462),s=r(3003),l=r(7128);const n=()=>{const e=(0,t.Zp)(),i=(0,s.wA)();return()=>{i((0,l.Tm)(1)),e("/products")}}}}]);
//# sourceMappingURL=255.8ce0fd03.chunk.js.map