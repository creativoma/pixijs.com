"use strict";(self.webpackChunkpixi_docusaurus=self.webpackChunkpixi_docusaurus||[]).push([[1744],{6001:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={},l="v8 Migration Guide",p={unversionedId:"guides/migrations/v8",id:"guides/migrations/v8",title:"v8 Migration Guide",description:"Welcome to the PixiJS v8 Migration Guide! This document is designed to help you smoothly transition your projects from PixiJS v7 to the latest and greatest PixiJS v8. Please follow these steps to ensure a successful migration.",source:"@site/docs/guides/migrations/v8.md",sourceDirName:"guides/migrations",slug:"/guides/migrations/v8",permalink:"/guides/migrations/v8",draft:!1,editUrl:"https://github.com/pixijs/pixijs.com/tree/main/docs/guides/migrations/v8.md",tags:[],version:"current",frontMatter:{},sidebar:"guidesSidebar",previous:{title:"Performance Tips",permalink:"/guides/production/performance-tips"},next:{title:"v7 Migration Guide",permalink:"/guides/migrations/v7"}},o={},s=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Breaking Changes",id:"2-breaking-changes",level:2},{value:"<strong>New Package Structure</strong>",id:"new-package-structure",level:3},{value:"Custom Builds",id:"custom-builds",level:4},{value:"<strong>Async Initialisation</strong>",id:"async-initialisation",level:3},{value:"<strong>Graphics API Overhaul</strong>",id:"graphics-api-overhaul",level:3},{value:"Other Breaking Changes",id:"other-breaking-changes",level:3},{value:"3. Deprecated Features",id:"3-deprecated-features",level:2},{value:"4. Resources",id:"4-resources",level:2}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"v8-migration-guide"},"v8 Migration Guide"),(0,i.kt)("p",null,"Welcome to the PixiJS v8 Migration Guide! This document is designed to help you smoothly transition your projects from PixiJS v7 to the latest and greatest PixiJS v8. Please follow these steps to ensure a successful migration."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#breaking-changes"},"Breaking Changes")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#deprecated-features"},"Deprecated Features")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"#resources"},"Resources"))),(0,i.kt)("h2",{id:"1-introduction"},"1. Introduction"),(0,i.kt)("p",null,"PixiJS v8 introduces several exciting changes and improvements that dramatically enhance the performance of the renderer. While we've made efforts to keep the migration process as smooth as possible, some breaking changes are inevitable. This guide will walk you through the necessary steps to migrate your PixiJS v7 project to PixiJS v8."),(0,i.kt)("h2",{id:"2-breaking-changes"},"2. Breaking Changes"),(0,i.kt)("p",null,"Before diving into the migration process, let's review the breaking changes introduced in PixiJS v8. Make sure to pay close attention to these changes as they may impact your existing codebase."),(0,i.kt)("h3",{id:"new-package-structure"},(0,i.kt)("strong",{parentName:"h3"},"New Package Structure")),(0,i.kt)("p",null,"  Since version 5, PixiJS has utilized individual sub-packages to organize its codebase into smaller units. However, this approach led to issues, such as conflicting installations of different PixiJS versions, causing complications with internal caches."),(0,i.kt)("p",null,"  In v8, PixiJS has reverted to a single-package structure. While you can still import specific parts of PixiJS, you only need to install the main package."),(0,i.kt)("p",null,"  ",(0,i.kt)("strong",{parentName:"p"},"Old:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Application } from '@pixi/app';\nimport { Sprite } from '@pixi/sprite';\n")),(0,i.kt)("p",null,"  ",(0,i.kt)("strong",{parentName:"p"},"New:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Application, Sprite } from 'pixi.js';\n")),(0,i.kt)("h4",{id:"custom-builds"},"Custom Builds"),(0,i.kt)("p",null,'  PixiJS uses an "extensions" system to add renderer functionality. By default, PixiJS includes many extensions for a comprehensive out-of-the-box experience. However, for full control over features and bundle size, you can manually import specific PixiJS components.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  // imported by default\n  import 'pixi.js/accessibility'\n  import 'pixi.js/app'\n  import 'pixi.js/events'\n  import 'pixi.js/filters'\n  import 'pixi.js/sprite-tiling'\n  import 'pixi.js/text'\n  import 'pixi.js/text-bitmap'\n  import 'pixi.js/text-html'\n  import 'pixi.js/graphics'\n  import 'pixi.js/mesh'\n  import 'pixi.js/sprite-nine-slice'\n\n  // not added by default, everyone needs to import these manually\n  import 'pixi.js/advanced-blend-modes'\n  import 'pixi.js/unsafe-eval'\n  import 'pixi.js/prepare'\n  import 'pixi.js/math-extras'\n  import 'pixi.js/dds'\n  import 'pixi.js/ktx'\n  import 'pixi.js/basis'\n\n  import { Application } from 'pixi.js';\n\n  const app = new Application();\n\n  await app.init({\n      manageImports: false, // disable importing the above extensions\n  });\n")),(0,i.kt)("p",null,"  When initializing the application, you can disable the auto-import feature, preventing PixiJS from importing any extensions automatically. You'll need to import them manually, as demonstrated above."),(0,i.kt)("p",null,"  It should also be noted that the ",(0,i.kt)("inlineCode",{parentName:"p"},"pixi.js/text-bitmap"),", also add ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets")," loading functionality.\nTherefore if you want to load bitmap fonts ",(0,i.kt)("strong",{parentName:"p"},"BEFORE")," initialising the renderer, you will need to import this extension."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  import 'pixi.js/text-bitmap'\n  import { Assets, Application } from 'pixi.js';\n\n  await Assets.load('my-font.fnt'); // If 'pixi.js/text-bitmap' is not imported, this will not load\n  await new Application().init();\n")),(0,i.kt)("h3",{id:"async-initialisation"},(0,i.kt)("strong",{parentName:"h3"},"Async Initialisation")),(0,i.kt)("p",null,"PixiJS will now need to be initialised asynchronously. With the introduction of the WebGPU renderer PixiJS will now need to be awaited before being used"),(0,i.kt)("p",null,"  ",(0,i.kt)("strong",{parentName:"p"},"Old:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Application } from 'pixi.js'\n\nconst app = new Application();\n\n// do pixi things\n")),(0,i.kt)("p",null,"  ",(0,i.kt)("strong",{parentName:"p"},"New:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Application } from 'pixi.js'\n\nconst app = new Application();\n\n(async () => {\n    await app.init({\n        // application options\n    });\n\n    // do pixi things\n})()\n")),(0,i.kt)("p",null,"  With this change it also means that the ",(0,i.kt)("inlineCode",{parentName:"p"},"ApplicationOptions")," object can now be passed into the ",(0,i.kt)("inlineCode",{parentName:"p"},"init")," function instead of the constructor."),(0,i.kt)("h3",{id:"graphics-api-overhaul"},(0,i.kt)("strong",{parentName:"h3"},"Graphics API Overhaul")),(0,i.kt)("p",null,"There are a few key changes to the Graphics API. In fact this is probably the most changed part of v8. We have added deprecations where possible but below is the rundown of changes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Instead of beginning a fill or a stroke and then building a shape, v8 asks you to build your shape and then stroke / fill it. The terminology of ",(0,i.kt)("inlineCode",{parentName:"li"},"Line")," has been replaced with the terminology of ",(0,i.kt)("inlineCode",{parentName:"li"},"Stroke"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Old")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// red rect\nconst graphics = new Graphics()\n  .beginFill(0xFF0000);\n  .drawRect(50, 50, 100, 100);\n  .endFill();\n\n// blur rect with stroke\nconst graphics2 = new Graphics()\n  .lineStyle(2, 'white');\n  .beginFill('blue');\n  .circle(530, 50, 140, 100);\n  .endFill();\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"New")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// red rect\nconst graphics = new Graphics()\n  .rect(50, 50, 100, 100)\n  .fill(0xFF0000)\n\n\n// blur rect with stroke\nconst graphics2 = new Graphics()\n  .rect(50, 50, 100, 100)\n  .fill('blue')\n  .stroke({width:2, color:'white'})\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Shape functions have been renamed. Each drawing function has been simplified into a shorter version of its name. They have the same parameters though:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"v7 API Call"),(0,i.kt)("th",{parentName:"tr",align:null},"v8 API Equivalent"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawChamferRect"),(0,i.kt)("td",{parentName:"tr",align:null},"chamferRect")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawCircle"),(0,i.kt)("td",{parentName:"tr",align:null},"circle")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawEllipse"),(0,i.kt)("td",{parentName:"tr",align:null},"ellipse")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawFilletRect"),(0,i.kt)("td",{parentName:"tr",align:null},"filletRect")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawPolygon"),(0,i.kt)("td",{parentName:"tr",align:null},"poly")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawRect"),(0,i.kt)("td",{parentName:"tr",align:null},"rect")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawRegularPolygon"),(0,i.kt)("td",{parentName:"tr",align:null},"regularPoly")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawRoundedPolygon"),(0,i.kt)("td",{parentName:"tr",align:null},"roundPoly")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawRoundedRect"),(0,i.kt)("td",{parentName:"tr",align:null},"roundRect")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawRoundedShape"),(0,i.kt)("td",{parentName:"tr",align:null},"roundShape")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"drawStar"),(0,i.kt)("td",{parentName:"tr",align:null},"star")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"fills functions expect ",(0,i.kt)("inlineCode",{parentName:"li"},"FillStyle")," options or a color, rather than a string of parameters. This also replaces ",(0,i.kt)("inlineCode",{parentName:"li"},"beginTextureFill"),(0,i.kt)("strong",{parentName:"li"},"Old"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  const rect = new Graphics()\n    .beginTextureFill({texture:Texture.WHITE, alpha:0.5, color:0xFF0000})\n    .drawRect(0, 0, 100, 100)\n    .endFill()\n    .beginFill(0xFFFF00, 0.5)\n    .drawRect(100, 0, 100, 100)\n    .endFill()\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"New")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  const rect = new Graphics()\n   .rect(0, 0, 100, 100)\n   .fill({texture:Texture.WHITE, alpha:0.5, color:0xFF0000})\n   .rect(100, 0, 100, 100)\n   .fill({color:0xFFFF00, alpha:0.5})\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"stokes functions expect ",(0,i.kt)("inlineCode",{parentName:"li"},"StrokeStyle")," options or a color, rather than a string of parameters. This also replaces ",(0,i.kt)("inlineCode",{parentName:"li"},"lineTextureStyle"),(0,i.kt)("strong",{parentName:"li"},"Old"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  const rect = new Graphics()\n    .lineTextureStyle({texture:Texture.WHITE, width:10, color:0xFF0000})\n    .drawRect(0, 0, 100, 100)\n    .endFill()\n    .lineStyle(2, 0xFEEB77);\n    .drawRect(100, 0, 100, 100)\n    .endFill()\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"New")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  const rect = new Graphics()\n   .rect(0, 0, 100, 100)\n   .stroke({texture:Texture.WHITE,  width:10, color:0xFF0000})\n   .rect(100, 0, 100, 100)\n   .stroke({color:0xFEEB77, width:2})\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"holes now make use of a new ",(0,i.kt)("inlineCode",{parentName:"li"},"cut")," function. As with ",(0,i.kt)("inlineCode",{parentName:"li"},"stroke")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"fill"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"cut")," acts on the previous shape.\n",(0,i.kt)("strong",{parentName:"li"},"Old"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  const rectAndHole = new Graphics()\n    .beginFill(0x00FF00)\n    .drawRect(0, 0, 100, 100)\n    .beginHole()\n    .drawCircle(50, 50, 20)\n    .endHole()\n    .endFill();\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"New")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  const rectAndHole = new Graphics()\n   .rect(0, 0, 100, 100)\n   .fill(0x00FF00)\n   .circle(50, 50, 20)\n   .cut();\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GraphicsGeometry")," has been replaced with ",(0,i.kt)("inlineCode",{parentName:"li"},"GraphicsContext")," this allows for sharing of ",(0,i.kt)("inlineCode",{parentName:"li"},"Graphics")," data more efficiently.\n",(0,i.kt)("strong",{parentName:"li"},"Old"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  const rect = new Graphics()\n  .beginFill(0xFF0000);\n  .drawRect(50, 50, 100, 100);\n  .endFill();\n\n  const geometry = rect.geometry;\n\n  const secondRect = new Graphics(geometry);\n\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"New")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"  const context = new GraphicsContext()\n    .rect(50, 50, 100, 100)\n    .fill(0xFF0000)\n\n  const rect = new Graphics(context);\n  const secondRect = new Graphics(context);\n")),(0,i.kt)("h3",{id:"other-breaking-changes"},"Other Breaking Changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"DisplayObject")," has been removed. ",(0,i.kt)("inlineCode",{parentName:"p"},"Container")," is now the base class for all PixiJS objects."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Old:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { DisplayObject } from 'pixi.js'\n\nclass MySprite extends DisplayObject {\n    constructor() {\n        super();\n    }\n}\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"New:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Container } from 'pixi.js'\n\nclass MySprite extends Container {\n    constructor() {\n        super();\n    }\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"updateTransform")," has been removed as nodes no longer contain any rendering logic"),(0,i.kt)("p",{parentName:"li"},"We do recognise that many people used this function to do custom logic every frame, so we have added a new ",(0,i.kt)("inlineCode",{parentName:"p"},"onRender")," function that can be used for this purpose."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Old:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class MySprite extends Sprite {\n    constructor() {\n        super();\n        this.updateTransform();\n    }\n\n    updateTransform() {\n        super.updateTransform();\n        // do custom logic\n    }\n}\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"New:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class MySprite extends Sprite {\n    constructor() {\n        super();\n        this.onRender = this._onRender.bind(this);\n    }\n\n    _onRender() {\n        // do custom logic\n    }\n}\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Mipmap generation changes"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The BaseTexture ",(0,i.kt)("inlineCode",{parentName:"li"},"mipmap")," property has been renamed to ",(0,i.kt)("inlineCode",{parentName:"li"},"autoGenerateMipmaps"),"."),(0,i.kt)("li",{parentName:"ul"},"Mipmaps for ",(0,i.kt)("inlineCode",{parentName:"li"},"RenderTextures")," have been adjusted so that developer is responsible for updating them mipmaps. Mipmap generation can be expensive, and due to the new reactive way we handle textures we do not want to accidentally generate mipmaps when they are not required.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const myRenderTexture = RenderTexture.create({width:100, height:100, autoGenerateMipmaps:true})\n\n// do some rendering..\nrenderer.render({target:myRenderTexture, container:scene})\n\n// now refresh mipmaps when you are ready\nmyRenderTexture.source.updateMipmaps();\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Due to the new way PixiJS handles things internally, sprites no longer get notified if a texture's UVs have been modified. The best practice is not to modify texture UVs once they have been created. It's best to have textures ready to go (they are inexpensive to create and store)."),(0,i.kt)("li",{parentName:"ul"},"Sometimes, you might want to employ a special technique that animates the UVs. In this last instance, you will be responsible for updating the sprite (it's worth noting that it may update automatically - but due to the new optimizations, this will not be guaranteed). Updating the source data (e.g., a video texture) will, however, always be reflected immediately.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const texture = await Assets.load('bunny.png');\nconst sprite = new Sprite(texture);\n\ntexture.frame.width = texture.frame.width/2;\ntexture.update();\n\n// guarantees the texture changes will be reflected on the sprite\nsprite.onViewUpdate();\n\n\n// alternatively you can hooke into the sprites event\ntexture.on('update', ()=>{sprite.onViewUpdate});\n")),(0,i.kt)("p",null,"The act of adding and removing the event when a sprite's texture was changed led to an unacceptable performance drop, especially when swapping many textures (imagine shooting games with lots of keyframe textures swapping). This is why we now leave that responsibility to the user."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"New Container culling approach"),(0,i.kt)("p",{parentName:"li"},"With this version of PixiJS we have changed how the ",(0,i.kt)("inlineCode",{parentName:"p"},"cullable")," property works on containers. Previously culling was done for you automatically during the render loop. However, we have moved this logic out and provided users the ability to control when culling happens themselves."),(0,i.kt)("p",{parentName:"li"},"With this change we have added a couple of new properties:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cullable")," - Whether or not the container can be culled"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cullArea")," - A cull area that will be used instead of the bounds of the container"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cullableChildren")," - Whether or not the containers children can be culled. This can help optimise large scenes")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"New:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const container = new GameWorld();\nconst view = new Rectangle(0, 0, 800, 600);\n\ncontainer.cullable = true;\ncontainer.cullArea = new Rectangle(0,0,400,400);\ncontainer.cullableChildren = false;\n\nCuller.shared.cull(myContainer, view);\nrenderer.render(myContainer);\n")),(0,i.kt)("p",{parentName:"li"},"There is also a ",(0,i.kt)("inlineCode",{parentName:"p"},"CullerPlugin")," that can be used to automatically call ",(0,i.kt)("inlineCode",{parentName:"p"},"Culler.shared.cull")," every frame if you want to simulate the old behaviour."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import {extensions, CullerPlugin} from 'pixi.js'\nextensions.add(CullerPlugin)\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Renamed several mesh classes"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"SimpleMesh")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"MeshSimple")),(0,i.kt)("li",{parentName:"ul"},"renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"SimplePlane")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"MeshPlane")),(0,i.kt)("li",{parentName:"ul"},"renamed ",(0,i.kt)("inlineCode",{parentName:"li"},"SimpleRope")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"MeshRope")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Deprecations for ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets")," removed"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Old:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Assets } from 'pixi.js'\n\nAssets.add('bunny', 'bunny.png')\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"New:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Assets } from 'pixi.js'\n\nAssets.add({ alias: 'bunny', src: 'bunny.png' })\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"settings")," object has been removed"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Old:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { settings, BrowserAdapter } from 'pixi.js'\n\nsettings.RESOLUTION = 1\nsettings.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = false\nsettings.ADAPTER = BrowserAdapter\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"New:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { AbstractRenderer, DOMAdapter, BrowserAdapter } from 'pixi.js'\n\n// Can also be passed into the renderer directly e.g `autoDetectRenderer({resolution: 1})`\nAbstractRenderer.defaultOptions.resolution = 1;\n\n// Can also be passed into the renderer directly e.g `autoDetectRenderer({failIfMajorPerformanceCaveat: false})`\nAbstractRenderer.defaultOptions.failIfMajorPerformanceCaveat = false;\n\n// See below for more information about changes to the adapter\nDOMAdapter.set(BrowserAdapter)\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Adapter and Web Worker Changes"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"settings.ADAPTER")," has been removed and replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"DOMAdapter")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DOMAdapter")," is a static class that can be used to set the adapter for the entire application"),(0,i.kt)("li",{parentName:"ul"},"PixiJS has two adapters built in ",(0,i.kt)("inlineCode",{parentName:"li"},"BrowserAdapter")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"WebWorkerAdapter"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BrowserAdapter")," is the default adapter and is used when running in the browser"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WebWorkerAdapter")," is used when running in a web worker")))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Old:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { settings, WebWorkerAdapter } from 'pixi.js'\n\nsettings.ADAPTER = WebWorkerAdapter\nsettings.ADAPTER.createCanvas()\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"New:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { DOMAdapter, WebWorkerAdapter } from 'pixi.js'\n\nDOMAdapter.set(WebWorkerAdapter)\nDOMAdapter.get().createCanvas()\n"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Application type now accepts Renderer instead of view by @Zyie in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pixijs/pixijs/pull/9740"},"https://github.com/pixijs/pixijs/pull/9740")),(0,i.kt)("p",{parentName:"li"},"This is to allow ",(0,i.kt)("inlineCode",{parentName:"p"},"app.renderer")," to be typed correctly"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Old:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const app = new Application<HTMLCanvasElement>()\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"New:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const app = new Application<Renderer<HTMLCanvasElement>>()\nconst app = new Application<WebGLRenderer<HTMLCanvasElement>>();\nconst app = new Application<WebGPURenderer<HTMLCanvasElement>>();\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Texture.from")," no longer will load a texture from a URL."),(0,i.kt)("p",{parentName:"li"},"When using ",(0,i.kt)("inlineCode",{parentName:"p"},"Texture.from")," you will need to pass in a source such as ",(0,i.kt)("inlineCode",{parentName:"p"},"CanvasSource"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"ImageSource"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"VideoSource")," or a resource such as ",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLImageElement"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLCanvasElement"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"HTMLVideoElement")," or a string that has been loaded through ",(0,i.kt)("inlineCode",{parentName:"p"},"Assets.load")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Old:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Texture } from 'pixi.js';\n\nconst texture = Texture.from('https://i.imgur.com/IaUrttj.png');\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"New:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Assets, Texture } from 'pixi.js';\n\nawait Assets.load('https://i.imgur.com/IaUrttj.png');\nconst texture = Texture.from('https://i.imgur.com/IaUrttj.png');\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Ticker"),"'s callback will now pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"Ticker")," instance instead of the delta time.\nThis is to allow for more control over what unit of time is used."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Old:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"Ticker.shared.add((dt)=> {\n    bunny.rotation += dt\n});\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"New:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"Ticker.shared.add((ticker)=> {\n    bunny.rotation += ticker.deltaTime;\n});\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Text parsers have been renamed"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TextFormat")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"bitmapFontTextParser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"XMLStringFormat")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"bitmapFontXMLStringParser")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"XMLFormat")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"bitmapFontXMLParser")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The default ",(0,i.kt)("inlineCode",{parentName:"p"},"eventMode")," is now ",(0,i.kt)("inlineCode",{parentName:"p"},"passive")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"auto"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"utils")," has been removed. All the functions are available as direct imports."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Old:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { utils } from 'pixi.js'\n\nutils.isMobile.any()\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"New:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { isMobile } from 'pixi.js'\n\nisMobile.any()\n")))),(0,i.kt)("h2",{id:"3-deprecated-features"},"3. Deprecated Features"),(0,i.kt)("p",null,"Certain features from PixiJS v7 have been deprecated in v8. While they will still work, it's recommended to update your code to use the new alternatives. Refer to the deprecated features section for details on what to replace them with."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Leaf nodes no longer allow children"),(0,i.kt)("p",{parentName:"li"},"Only ",(0,i.kt)("inlineCode",{parentName:"p"},"Containers")," can have children. This means that ",(0,i.kt)("inlineCode",{parentName:"p"},"Sprite"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Mesh"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Graphics")," etc can no longer have children."),(0,i.kt)("p",{parentName:"li"},"To replicate the old behaviour you can create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Container")," and add the leaf nodes to it."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Old:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const sprite = new Sprite();\nconst spriteChild = new Sprite();\nsprite.addChild(spriteChild);\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"New:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const container = new Container();\nconst sprite = new Sprite();\nconst spriteChild = new Sprite();\n\ncontainer.addChild(sprite);\ncontainer.addChild(spriteChild);\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Application.view")," replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"Application.canvas")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Old:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const app = new Application({ view: document.createElement('canvas') });\ndocument.body.appendChild(app.view);\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"New:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const app = new Application();\nawait app.init({ view: document.createElement('canvas') });\ndocument.body.appendChild(app.canvas);\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"NineSlicePlane")," renamed to ",(0,i.kt)("inlineCode",{parentName:"p"},"NineSliceSprite"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SCALE_MODES")," replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"ScaleMode")," strings"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SCALE_MODES.NEAREST")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"'nearest'"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SCALE_MODES.LINEAR")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"'linear'"),","))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"WRAP_MODES")," replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"WrapMode")," strings"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WRAP_MODES.CLAMP")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"'clamp'"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WRAP_MODES.REPEAT")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"'repeat'"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WRAP_MODES.MIRRORED_REPEAT")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"'mirror-repeat'"),","))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"DRAW_MODES")," replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"Topology")," strings"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DRAW_MODES.POINTS")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"'point-list'"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DRAW_MODES.LINES")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"'line-list'"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DRAW_MODES.LINE_STRIP")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"'line-strip'"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DRAW_MODES.TRIANGLES")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"'triangle-list'"),","),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DRAW_MODES.TRIANGLE_STRIP")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"'triangle-strip'"),","))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Constructors have largely been changed to accept objects instead of multiple arguments"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Old:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const blurFilter = new BlurFilter(8, 4, 1, 5);\nconst displacementFilter = new DisplacementFilter(sprite, 5);\nconst meshGeometry = new MeshGeometry(vertices, uvs, index);\nconst mesh = new Mesh(geometry, shader, state, drawMode);\nconst plane = new PlaneGeometry(width, height, segWidth, segHeight);\nconst nineSlicePlane = new NineSlicePlane(texture, leftWidth, topHeight, rightWidth, bottomHeight);\nconst tileSprite = new TileSprite(texture, width, height);\nconst text = new Text('Hello World', style);\nconst bitmapText = new BitmapText('Hello World', style);\nconst htmlText = new HTMLText('Hello World', style);\n")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"New:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const blurFilter = new BlurFilter({\n    blur: 8,\n    quality: 4,\n    resolution: 1,\n    kernelSize: 5,\n});\nconst displacementFilter = new DisplacementFilter({\n    sprite,\n    scale: 5,\n});\nconst meshGeometry = new MeshGeometry({\n    positions: vertices,\n    uvs,\n    indices: index,\n    topology: 'triangle-list';\n    shrinkBuffersToFit: boolean;\n});\nconst mesh = new Mesh({\n    geometry\n    shader\n    texture\n});\nconst plane = new PlaneGeometry({\n    width,\n    height,\n    verticesX: segWidth,\n    verticesY: segHeight,\n});\nconst nineSliceSprite = new NineSliceSprite({\n    texture,\n    leftWidth,\n    topHeight,\n    rightWidth,\n    bottomHeight,\n});\nconst tileSprite = new TileSprite({\n    texture,\n    width,\n    height,\n});\nconst text = new Text({\n    text: 'Hello World',\n    style,\n});\nconst bitmapText = new BitmapText({\n    text:'Hello World',\n    style,\n});\nconst htmlText = new HTMLText({\n    text:'Hello World',\n    style,\n});\n")))),(0,i.kt)("h2",{id:"4-resources"},"4. Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/pixijs/pixijs/releases?q=v8.0.0&expanded=true"},"PixiJS v8 Release Notes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discord.gg/CPTjeb28nH"},"PixiJS Discord")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/pixijs/pixijs/issues"},"PixiJS Issues"))))}d.isMDXComponent=!0}}]);