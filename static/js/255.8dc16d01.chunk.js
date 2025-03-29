"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[255],{7255:(e,r,i)=>{i.r(r),i.d(r,{default:()=>A});var t=i(5043),s=i(3003),n=i(7128),l=i(6462),o=i(5865),a=i(1637),d=i(2110),c=i(6494),p=i(1906),x=i(6918),h=i(7392),u=i(5244),j=i(7466),m=i(1387),v=i(680),g=i(9951),w=i(8483),f=i(579);const A=()=>{const e=(0,s.wA)(),r=(0,l.Zp)(),i=(0,s.d4)((e=>e.makeup.products)),A=(0,s.d4)((e=>e.makeup.loading)),k=(0,s.d4)((e=>e.makeup.favorites)),y=(0,s.d4)((e=>e.makeup.error)),C=(0,s.d4)((e=>e.makeup.currentPage)),b=(0,s.d4)((e=>e.makeup.productsPerPage)),[S,P]=(0,t.useState)(1),[O,_]=(0,t.useState)(""),[E,T]=(0,t.useState)("all"),F=(0,s.d4)((e=>e.makeup.isLoaded));(0,t.useEffect)((()=>{const r=localStorage.getItem("products");r?e((0,n.K2)(JSON.parse(r))):F||e((0,n.E$)())}),[e,F]);const H=i.filter((e=>e.name.toLowerCase().includes(O.toLowerCase()))),L=H.filter((e=>k.includes(e.id))),M=C*b,N=M-b,$=H.slice(N,M),D=S*b,Z=D-b,q=L.slice(Z,D),z=r=>{e((0,n.Tm)(r))},G=e=>{P(e)},I=e=>{T(e)},J=(0,g.A)();return(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{onClick:J,role:"button",style:{cursor:"pointer",margin:"10px 15px"},children:"Makeup Products"}),A&&(0,f.jsx)(a.A,{}),y&&(0,f.jsxs)(f.Fragment,{children:[console.error("Error:",y),(0,f.jsx)("p",{children:"string"===typeof y?y:"An unexpected error occurred."})]}),(0,f.jsx)(v.A,{label:"Search Products",value:O,onChange:e=>{_(e.target.value),z(1)},sx:{margin:"auto 15px"}}),(0,f.jsx)(p.A,{onClick:()=>I("all"),variant:"all"===E?"contained":"outlined",sx:{m:2},children:"All Products"}),(0,f.jsx)(p.A,{onClick:()=>I("favorites"),variant:"favorites"===E?"contained":"outlined",children:"Favorite Products"}),(0,f.jsx)(x.A,{container:!0,spacing:3,sx:{m:2},children:("all"===E?$:q).map((i=>(0,f.jsx)(x.A,{size:{xs:12,sm:6,md:2},children:(0,f.jsxs)(d.A,{onClick:()=>{return e=i.id,void r(`/products/${e}`);var e},sx:{cursor:"pointer",maxWidth:300,minHeight:"400px",maxHeight:"550px",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,f.jsx)("div",{style:{width:"100%",height:"400px",overflow:"hidden"},children:(0,f.jsx)("img",{src:i.image_link,alt:i.name,style:{width:"100%",maxHeight:"400px",objectFit:"cover"},onError:e=>e.currentTarget.src="/makeup_products/no-products-found.png"})}),(0,f.jsxs)(c.A,{sx:{flexGrow:1,display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,f.jsxs)("div",{children:[(0,f.jsx)(w.A,{title:i.name,arrow:!0,children:(0,f.jsx)(o.A,{variant:"h6",sx:{height:"50px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:i.name})}),(0,f.jsx)(o.A,{variant:"body2",color:"textSecondary",sx:{height:"40px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:i.brand}),(0,f.jsx)(w.A,{title:i.price,arrow:!0,children:(0,f.jsxs)(o.A,{variant:"body1",sx:{height:"40px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:["$",i.price]})}),(0,f.jsx)(o.A,{variant:"body2",color:"textSecondary",sx:{height:"20px",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},children:i.product_type})]}),(0,f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"10px"},children:[(0,f.jsx)(h.A,{onClick:r=>{var t;r.stopPropagation(),t=i.id,e((0,n.dw)(t))},color:"primary",children:k.includes(i.id)?(0,f.jsx)(u.A,{}):(0,f.jsx)(j.A,{})}),(0,f.jsx)(h.A,{onClick:r=>{var t;r.stopPropagation(),t=i.id,e((0,n.qY)(t))},color:"secondary",children:(0,f.jsx)(m.A,{})})]})]})]})},i.id)))}),"all"===E?(0,f.jsxs)("div",{style:{margin:"0 15px"},children:[(0,f.jsx)(p.A,{onClick:()=>z(C-1),disabled:1===C,children:"Previous"}),(0,f.jsx)(p.A,{onClick:()=>z(C+1),disabled:C===Math.ceil(H.length/b),children:"Next"})]}):(0,f.jsxs)("div",{style:{margin:"0 15px"},children:[(0,f.jsx)(p.A,{onClick:()=>G(S-1),disabled:1===S,children:"Previous"}),(0,f.jsx)(p.A,{onClick:()=>G(S+1),disabled:S===Math.ceil(L.length/b),children:"Next"})]}),(0,f.jsx)("div",{style:{margin:"0 15px"},children:(0,f.jsx)(p.A,{onClick:()=>{r("/create-product")},children:"Create product"})})]})}},9951:(e,r,i)=>{i.d(r,{A:()=>l});var t=i(6462),s=i(3003),n=i(7128);const l=()=>{const e=(0,t.Zp)(),r=(0,s.wA)();return()=>{r((0,n.Tm)(1)),e("/products")}}}}]);
//# sourceMappingURL=255.8dc16d01.chunk.js.map