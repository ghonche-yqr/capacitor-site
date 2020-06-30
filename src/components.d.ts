/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MarkdownContent, MarkdownHeading, SiteStructureItem, } from "./global/definitions";
export namespace Components {
    interface AnchorLink {
        "to": string;
    }
    interface AppMarked {
        "fetchPath"?: string;
        "renderer"?: (doc: MarkdownContent) => any;
    }
    interface AppMenuToggle {
        "icon": string;
    }
    interface AvcCodeType {
        "typeId": string;
    }
    interface BlogPage {
    }
    interface BlogPost {
        "slug": string;
    }
    interface CapacitorCommunity {
    }
    interface CapacitorEnterprise {
    }
    interface CapacitorSite {
    }
    interface CapacitorSiteFooter {
    }
    interface CapacitorSiteHeader {
    }
    interface CapacitorSiteRoutes {
    }
    interface CodeSnippet {
        "code": string;
        "language": string;
    }
    interface ContributorList {
        "contributors": string[];
        "link": (contributor: string) => string;
    }
    interface CordovaLandingPage {
    }
    interface DocSnippet {
    }
    interface DocsHeader {
    }
    interface DocsMenu {
        "selectedParent": SiteStructureItem;
        "siteStructureList": SiteStructureItem[];
        "toggleOverlayMenu": () => Promise<void>;
    }
    interface DocsSearch {
    }
    interface DocumentComponent {
        "page": string;
        "pages": string[];
    }
    interface InPageNavigation {
        "currentPageUrl": string;
        "pageLinks": MarkdownHeading[];
        "srcUrl": string;
    }
    interface InternalAd {
    }
    interface LandingPage {
    }
    interface LowerContentNav {
        "next"?: SiteStructureItem;
        "prev"?: SiteStructureItem;
    }
    interface NewsletterSignup {
    }
    interface PluginApi {
        "index": boolean;
        "name": string;
    }
    interface PluginPlatforms {
        "platforms": string;
    }
    interface PreFooter {
    }
    interface SolutionPage {
        "solutionId": string;
    }
}
declare global {
    interface HTMLAnchorLinkElement extends Components.AnchorLink, HTMLStencilElement {
    }
    var HTMLAnchorLinkElement: {
        prototype: HTMLAnchorLinkElement;
        new (): HTMLAnchorLinkElement;
    };
    interface HTMLAppMarkedElement extends Components.AppMarked, HTMLStencilElement {
    }
    var HTMLAppMarkedElement: {
        prototype: HTMLAppMarkedElement;
        new (): HTMLAppMarkedElement;
    };
    interface HTMLAppMenuToggleElement extends Components.AppMenuToggle, HTMLStencilElement {
    }
    var HTMLAppMenuToggleElement: {
        prototype: HTMLAppMenuToggleElement;
        new (): HTMLAppMenuToggleElement;
    };
    interface HTMLAvcCodeTypeElement extends Components.AvcCodeType, HTMLStencilElement {
    }
    var HTMLAvcCodeTypeElement: {
        prototype: HTMLAvcCodeTypeElement;
        new (): HTMLAvcCodeTypeElement;
    };
    interface HTMLBlogPageElement extends Components.BlogPage, HTMLStencilElement {
    }
    var HTMLBlogPageElement: {
        prototype: HTMLBlogPageElement;
        new (): HTMLBlogPageElement;
    };
    interface HTMLBlogPostElement extends Components.BlogPost, HTMLStencilElement {
    }
    var HTMLBlogPostElement: {
        prototype: HTMLBlogPostElement;
        new (): HTMLBlogPostElement;
    };
    interface HTMLCapacitorCommunityElement extends Components.CapacitorCommunity, HTMLStencilElement {
    }
    var HTMLCapacitorCommunityElement: {
        prototype: HTMLCapacitorCommunityElement;
        new (): HTMLCapacitorCommunityElement;
    };
    interface HTMLCapacitorEnterpriseElement extends Components.CapacitorEnterprise, HTMLStencilElement {
    }
    var HTMLCapacitorEnterpriseElement: {
        prototype: HTMLCapacitorEnterpriseElement;
        new (): HTMLCapacitorEnterpriseElement;
    };
    interface HTMLCapacitorSiteElement extends Components.CapacitorSite, HTMLStencilElement {
    }
    var HTMLCapacitorSiteElement: {
        prototype: HTMLCapacitorSiteElement;
        new (): HTMLCapacitorSiteElement;
    };
    interface HTMLCapacitorSiteFooterElement extends Components.CapacitorSiteFooter, HTMLStencilElement {
    }
    var HTMLCapacitorSiteFooterElement: {
        prototype: HTMLCapacitorSiteFooterElement;
        new (): HTMLCapacitorSiteFooterElement;
    };
    interface HTMLCapacitorSiteHeaderElement extends Components.CapacitorSiteHeader, HTMLStencilElement {
    }
    var HTMLCapacitorSiteHeaderElement: {
        prototype: HTMLCapacitorSiteHeaderElement;
        new (): HTMLCapacitorSiteHeaderElement;
    };
    interface HTMLCapacitorSiteRoutesElement extends Components.CapacitorSiteRoutes, HTMLStencilElement {
    }
    var HTMLCapacitorSiteRoutesElement: {
        prototype: HTMLCapacitorSiteRoutesElement;
        new (): HTMLCapacitorSiteRoutesElement;
    };
    interface HTMLCodeSnippetElement extends Components.CodeSnippet, HTMLStencilElement {
    }
    var HTMLCodeSnippetElement: {
        prototype: HTMLCodeSnippetElement;
        new (): HTMLCodeSnippetElement;
    };
    interface HTMLContributorListElement extends Components.ContributorList, HTMLStencilElement {
    }
    var HTMLContributorListElement: {
        prototype: HTMLContributorListElement;
        new (): HTMLContributorListElement;
    };
    interface HTMLCordovaLandingPageElement extends Components.CordovaLandingPage, HTMLStencilElement {
    }
    var HTMLCordovaLandingPageElement: {
        prototype: HTMLCordovaLandingPageElement;
        new (): HTMLCordovaLandingPageElement;
    };
    interface HTMLDocSnippetElement extends Components.DocSnippet, HTMLStencilElement {
    }
    var HTMLDocSnippetElement: {
        prototype: HTMLDocSnippetElement;
        new (): HTMLDocSnippetElement;
    };
    interface HTMLDocsHeaderElement extends Components.DocsHeader, HTMLStencilElement {
    }
    var HTMLDocsHeaderElement: {
        prototype: HTMLDocsHeaderElement;
        new (): HTMLDocsHeaderElement;
    };
    interface HTMLDocsMenuElement extends Components.DocsMenu, HTMLStencilElement {
    }
    var HTMLDocsMenuElement: {
        prototype: HTMLDocsMenuElement;
        new (): HTMLDocsMenuElement;
    };
    interface HTMLDocsSearchElement extends Components.DocsSearch, HTMLStencilElement {
    }
    var HTMLDocsSearchElement: {
        prototype: HTMLDocsSearchElement;
        new (): HTMLDocsSearchElement;
    };
    interface HTMLDocumentComponentElement extends Components.DocumentComponent, HTMLStencilElement {
    }
    var HTMLDocumentComponentElement: {
        prototype: HTMLDocumentComponentElement;
        new (): HTMLDocumentComponentElement;
    };
    interface HTMLInPageNavigationElement extends Components.InPageNavigation, HTMLStencilElement {
    }
    var HTMLInPageNavigationElement: {
        prototype: HTMLInPageNavigationElement;
        new (): HTMLInPageNavigationElement;
    };
    interface HTMLInternalAdElement extends Components.InternalAd, HTMLStencilElement {
    }
    var HTMLInternalAdElement: {
        prototype: HTMLInternalAdElement;
        new (): HTMLInternalAdElement;
    };
    interface HTMLLandingPageElement extends Components.LandingPage, HTMLStencilElement {
    }
    var HTMLLandingPageElement: {
        prototype: HTMLLandingPageElement;
        new (): HTMLLandingPageElement;
    };
    interface HTMLLowerContentNavElement extends Components.LowerContentNav, HTMLStencilElement {
    }
    var HTMLLowerContentNavElement: {
        prototype: HTMLLowerContentNavElement;
        new (): HTMLLowerContentNavElement;
    };
    interface HTMLNewsletterSignupElement extends Components.NewsletterSignup, HTMLStencilElement {
    }
    var HTMLNewsletterSignupElement: {
        prototype: HTMLNewsletterSignupElement;
        new (): HTMLNewsletterSignupElement;
    };
    interface HTMLPluginApiElement extends Components.PluginApi, HTMLStencilElement {
    }
    var HTMLPluginApiElement: {
        prototype: HTMLPluginApiElement;
        new (): HTMLPluginApiElement;
    };
    interface HTMLPluginPlatformsElement extends Components.PluginPlatforms, HTMLStencilElement {
    }
    var HTMLPluginPlatformsElement: {
        prototype: HTMLPluginPlatformsElement;
        new (): HTMLPluginPlatformsElement;
    };
    interface HTMLPreFooterElement extends Components.PreFooter, HTMLStencilElement {
    }
    var HTMLPreFooterElement: {
        prototype: HTMLPreFooterElement;
        new (): HTMLPreFooterElement;
    };
    interface HTMLSolutionPageElement extends Components.SolutionPage, HTMLStencilElement {
    }
    var HTMLSolutionPageElement: {
        prototype: HTMLSolutionPageElement;
        new (): HTMLSolutionPageElement;
    };
    interface HTMLElementTagNameMap {
        "anchor-link": HTMLAnchorLinkElement;
        "app-marked": HTMLAppMarkedElement;
        "app-menu-toggle": HTMLAppMenuToggleElement;
        "avc-code-type": HTMLAvcCodeTypeElement;
        "blog-page": HTMLBlogPageElement;
        "blog-post": HTMLBlogPostElement;
        "capacitor-community": HTMLCapacitorCommunityElement;
        "capacitor-enterprise": HTMLCapacitorEnterpriseElement;
        "capacitor-site": HTMLCapacitorSiteElement;
        "capacitor-site-footer": HTMLCapacitorSiteFooterElement;
        "capacitor-site-header": HTMLCapacitorSiteHeaderElement;
        "capacitor-site-routes": HTMLCapacitorSiteRoutesElement;
        "code-snippet": HTMLCodeSnippetElement;
        "contributor-list": HTMLContributorListElement;
        "cordova-landing-page": HTMLCordovaLandingPageElement;
        "doc-snippet": HTMLDocSnippetElement;
        "docs-header": HTMLDocsHeaderElement;
        "docs-menu": HTMLDocsMenuElement;
        "docs-search": HTMLDocsSearchElement;
        "document-component": HTMLDocumentComponentElement;
        "in-page-navigation": HTMLInPageNavigationElement;
        "internal-ad": HTMLInternalAdElement;
        "landing-page": HTMLLandingPageElement;
        "lower-content-nav": HTMLLowerContentNavElement;
        "newsletter-signup": HTMLNewsletterSignupElement;
        "plugin-api": HTMLPluginApiElement;
        "plugin-platforms": HTMLPluginPlatformsElement;
        "pre-footer": HTMLPreFooterElement;
        "solution-page": HTMLSolutionPageElement;
    }
}
declare namespace LocalJSX {
    interface AnchorLink {
        "to"?: string;
    }
    interface AppMarked {
        "fetchPath"?: string;
        "renderer"?: (doc: MarkdownContent) => any;
    }
    interface AppMenuToggle {
        "icon"?: string;
        "onMenuToggleClick"?: (event: CustomEvent<any>) => void;
    }
    interface AvcCodeType {
        "typeId"?: string;
    }
    interface BlogPage {
    }
    interface BlogPost {
        "slug"?: string;
    }
    interface CapacitorCommunity {
    }
    interface CapacitorEnterprise {
    }
    interface CapacitorSite {
    }
    interface CapacitorSiteFooter {
    }
    interface CapacitorSiteHeader {
    }
    interface CapacitorSiteRoutes {
    }
    interface CodeSnippet {
        "code"?: string;
        "language"?: string;
    }
    interface ContributorList {
        "contributors"?: string[];
        "link"?: (contributor: string) => string;
    }
    interface CordovaLandingPage {
    }
    interface DocSnippet {
    }
    interface DocsHeader {
    }
    interface DocsMenu {
        "selectedParent"?: SiteStructureItem;
        "siteStructureList"?: SiteStructureItem[];
    }
    interface DocsSearch {
    }
    interface DocumentComponent {
        "page"?: string;
        "pages"?: string[];
    }
    interface InPageNavigation {
        "currentPageUrl"?: string;
        "pageLinks"?: MarkdownHeading[];
        "srcUrl"?: string;
    }
    interface InternalAd {
        "onInternalAdLoaded"?: (event: CustomEvent<any>) => void;
    }
    interface LandingPage {
    }
    interface LowerContentNav {
        "next"?: SiteStructureItem;
        "prev"?: SiteStructureItem;
    }
    interface NewsletterSignup {
    }
    interface PluginApi {
        "index"?: boolean;
        "name"?: string;
    }
    interface PluginPlatforms {
        "platforms"?: string;
    }
    interface PreFooter {
    }
    interface SolutionPage {
        "solutionId"?: string;
    }
    interface IntrinsicElements {
        "anchor-link": AnchorLink;
        "app-marked": AppMarked;
        "app-menu-toggle": AppMenuToggle;
        "avc-code-type": AvcCodeType;
        "blog-page": BlogPage;
        "blog-post": BlogPost;
        "capacitor-community": CapacitorCommunity;
        "capacitor-enterprise": CapacitorEnterprise;
        "capacitor-site": CapacitorSite;
        "capacitor-site-footer": CapacitorSiteFooter;
        "capacitor-site-header": CapacitorSiteHeader;
        "capacitor-site-routes": CapacitorSiteRoutes;
        "code-snippet": CodeSnippet;
        "contributor-list": ContributorList;
        "cordova-landing-page": CordovaLandingPage;
        "doc-snippet": DocSnippet;
        "docs-header": DocsHeader;
        "docs-menu": DocsMenu;
        "docs-search": DocsSearch;
        "document-component": DocumentComponent;
        "in-page-navigation": InPageNavigation;
        "internal-ad": InternalAd;
        "landing-page": LandingPage;
        "lower-content-nav": LowerContentNav;
        "newsletter-signup": NewsletterSignup;
        "plugin-api": PluginApi;
        "plugin-platforms": PluginPlatforms;
        "pre-footer": PreFooter;
        "solution-page": SolutionPage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "anchor-link": LocalJSX.AnchorLink & JSXBase.HTMLAttributes<HTMLAnchorLinkElement>;
            "app-marked": LocalJSX.AppMarked & JSXBase.HTMLAttributes<HTMLAppMarkedElement>;
            "app-menu-toggle": LocalJSX.AppMenuToggle & JSXBase.HTMLAttributes<HTMLAppMenuToggleElement>;
            "avc-code-type": LocalJSX.AvcCodeType & JSXBase.HTMLAttributes<HTMLAvcCodeTypeElement>;
            "blog-page": LocalJSX.BlogPage & JSXBase.HTMLAttributes<HTMLBlogPageElement>;
            "blog-post": LocalJSX.BlogPost & JSXBase.HTMLAttributes<HTMLBlogPostElement>;
            "capacitor-community": LocalJSX.CapacitorCommunity & JSXBase.HTMLAttributes<HTMLCapacitorCommunityElement>;
            "capacitor-enterprise": LocalJSX.CapacitorEnterprise & JSXBase.HTMLAttributes<HTMLCapacitorEnterpriseElement>;
            "capacitor-site": LocalJSX.CapacitorSite & JSXBase.HTMLAttributes<HTMLCapacitorSiteElement>;
            "capacitor-site-footer": LocalJSX.CapacitorSiteFooter & JSXBase.HTMLAttributes<HTMLCapacitorSiteFooterElement>;
            "capacitor-site-header": LocalJSX.CapacitorSiteHeader & JSXBase.HTMLAttributes<HTMLCapacitorSiteHeaderElement>;
            "capacitor-site-routes": LocalJSX.CapacitorSiteRoutes & JSXBase.HTMLAttributes<HTMLCapacitorSiteRoutesElement>;
            "code-snippet": LocalJSX.CodeSnippet & JSXBase.HTMLAttributes<HTMLCodeSnippetElement>;
            "contributor-list": LocalJSX.ContributorList & JSXBase.HTMLAttributes<HTMLContributorListElement>;
            "cordova-landing-page": LocalJSX.CordovaLandingPage & JSXBase.HTMLAttributes<HTMLCordovaLandingPageElement>;
            "doc-snippet": LocalJSX.DocSnippet & JSXBase.HTMLAttributes<HTMLDocSnippetElement>;
            "docs-header": LocalJSX.DocsHeader & JSXBase.HTMLAttributes<HTMLDocsHeaderElement>;
            "docs-menu": LocalJSX.DocsMenu & JSXBase.HTMLAttributes<HTMLDocsMenuElement>;
            "docs-search": LocalJSX.DocsSearch & JSXBase.HTMLAttributes<HTMLDocsSearchElement>;
            "document-component": LocalJSX.DocumentComponent & JSXBase.HTMLAttributes<HTMLDocumentComponentElement>;
            "in-page-navigation": LocalJSX.InPageNavigation & JSXBase.HTMLAttributes<HTMLInPageNavigationElement>;
            "internal-ad": LocalJSX.InternalAd & JSXBase.HTMLAttributes<HTMLInternalAdElement>;
            "landing-page": LocalJSX.LandingPage & JSXBase.HTMLAttributes<HTMLLandingPageElement>;
            "lower-content-nav": LocalJSX.LowerContentNav & JSXBase.HTMLAttributes<HTMLLowerContentNavElement>;
            "newsletter-signup": LocalJSX.NewsletterSignup & JSXBase.HTMLAttributes<HTMLNewsletterSignupElement>;
            "plugin-api": LocalJSX.PluginApi & JSXBase.HTMLAttributes<HTMLPluginApiElement>;
            "plugin-platforms": LocalJSX.PluginPlatforms & JSXBase.HTMLAttributes<HTMLPluginPlatformsElement>;
            "pre-footer": LocalJSX.PreFooter & JSXBase.HTMLAttributes<HTMLPreFooterElement>;
            "solution-page": LocalJSX.SolutionPage & JSXBase.HTMLAttributes<HTMLSolutionPageElement>;
        }
    }
}
