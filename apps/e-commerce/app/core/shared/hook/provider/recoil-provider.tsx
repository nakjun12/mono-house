"use client";

import type { PropsWithChildren } from "react";
import { RecoilRoot } from "recoil";

export default function RecoilProvider({
	children,
}: Readonly<PropsWithChildren<object>>) {
	return <RecoilRoot>{children}</RecoilRoot>;
}
