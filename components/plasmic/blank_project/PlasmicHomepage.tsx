// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 46HRUmKiZfZWKqbQxfEozQ
// Component: Rna8FYquKn5x
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_blank_project.module.css"; // plasmic-import: 46HRUmKiZfZWKqbQxfEozQ/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: Rna8FYquKn5x/css

import Xmlid4StrokeIcon from "../jd_websi/icons/PlasmicIcon__Xmlid4Stroke"; // plasmic-import: _uGP_2Uqg5/icon
import Group1Icon from "../jd_websi/icons/PlasmicIcon__Group1"; // plasmic-import: 7HhSlfyiyN/icon
import Rectangle1Icon from "../jd_websi/icons/PlasmicIcon__Rectangle1"; // plasmic-import: wmZKUJnvSn/icon

export type PlasmicHomepage__VariantMembers = {};

export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  figmaPaste?: p.Flex<"div">;
  stilu10Pt100?: p.Flex<"div">;
  group2?: p.Flex<"div">;
  group4?: p.Flex<"div">;
  group5?: p.Flex<"div">;
  _?: p.Flex<"div">;
  group6?: p.Flex<"div">;
  group7?: p.Flex<"div">;
  group8?: p.Flex<"div">;
  group9?: p.Flex<"div">;
  rectangle7?: p.Flex<"div">;
};

export interface DefaultHomepageProps {}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <React.Fragment>
      {}

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        {true ? (
          <p.Stack
            as={"div"}
            data-plasmic-name={"root"}
            data-plasmic-override={overrides.root}
            data-plasmic-root={true}
            data-plasmic-for-node={forNode}
            hasGap={true}
            className={classNames(
              projectcss.all,
              projectcss.root_reset,
              projectcss.plasmic_default_styles,
              projectcss.plasmic_mixins,
              projectcss.plasmic_tokens,
              sty.root
            )}
          >
            {true ? (
              <div
                data-plasmic-name={"figmaPaste"}
                data-plasmic-override={overrides.figmaPaste}
                className={classNames(projectcss.all, sty.figmaPaste)}
              >
                <div
                  data-plasmic-name={"stilu10Pt100"}
                  data-plasmic-override={overrides.stilu10Pt100}
                  className={classNames(projectcss.all, sty.stilu10Pt100)}
                >
                  <div
                    data-plasmic-name={"group2"}
                    data-plasmic-override={overrides.group2}
                    className={classNames(projectcss.all, sty.group2)}
                  >
                    <Xmlid4StrokeIcon
                      className={classNames(projectcss.all, sty.svg__aRmVn)}
                      role={"img"}
                    />

                    <Group1Icon
                      className={classNames(projectcss.all, sty.svg__uAtHo)}
                      role={"img"}
                    />
                  </div>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__uqu7H
                  )}
                >
                  {"️"}
                </div>

                <div
                  data-plasmic-name={"group4"}
                  data-plasmic-override={overrides.group4}
                  className={classNames(projectcss.all, sty.group4)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__oJKkW
                    )}
                  >
                    {
                      "GTM Tags, Marketing Calculators \nand Javascript Stuff to Play With."
                    }
                  </div>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___6FnEz
                  )}
                >
                  {"Made With ❤ in Athens"}
                </div>

                <div
                  data-plasmic-name={"group5"}
                  data-plasmic-override={overrides.group5}
                  className={classNames(projectcss.all, sty.group5)}
                >
                  <Rectangle1Icon
                    className={classNames(projectcss.all, sty.svg__prMf5)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___9QKax
                    )}
                  >
                    {"View Services"}
                  </div>
                </div>

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__uDhC7
                  )}
                >
                  {"Be Quick & Deploy"}
                </div>

                <div
                  data-plasmic-name={"_"}
                  data-plasmic-override={overrides._}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty._
                  )}
                >
                  {" ✌🏻"}
                </div>

                <div
                  data-plasmic-name={"group6"}
                  data-plasmic-override={overrides.group6}
                  className={classNames(projectcss.all, sty.group6)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__vcGgQ
                    )}
                  >
                    {"About"}
                  </div>
                </div>

                <div
                  data-plasmic-name={"group7"}
                  data-plasmic-override={overrides.group7}
                  className={classNames(projectcss.all, sty.group7)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fdFDy
                    )}
                  >
                    {"Tools & Calculators"}
                  </div>
                </div>

                <div
                  data-plasmic-name={"group8"}
                  data-plasmic-override={overrides.group8}
                  className={classNames(projectcss.all, sty.group8)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zqr0N
                    )}
                  >
                    {"Tracking Library"}
                  </div>
                </div>

                {true ? (
                  <div
                    data-plasmic-name={"group9"}
                    data-plasmic-override={overrides.group9}
                    className={classNames(projectcss.all, sty.group9)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__iLj3U
                      )}
                    >
                      {"Services"}
                    </div>
                  </div>
                ) : null}
                {true ? (
                  <div
                    data-plasmic-name={"rectangle7"}
                    data-plasmic-override={overrides.rectangle7}
                    className={classNames(projectcss.all, sty.rectangle7)}
                  />
                ) : null}
              </div>
            ) : null}
          </p.Stack>
        ) : null}
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "figmaPaste",
    "stilu10Pt100",
    "group2",
    "group4",
    "group5",
    "_",
    "group6",
    "group7",
    "group8",
    "group9",
    "rectangle7"
  ],
  figmaPaste: [
    "figmaPaste",
    "stilu10Pt100",
    "group2",
    "group4",
    "group5",
    "_",
    "group6",
    "group7",
    "group8",
    "group9",
    "rectangle7"
  ],
  stilu10Pt100: ["stilu10Pt100", "group2"],
  group2: ["group2"],
  group4: ["group4"],
  group5: ["group5"],
  _: ["_"],
  group6: ["group6"],
  group7: ["group7"],
  group8: ["group8"],
  group9: ["group9"],
  rectangle7: ["rectangle7"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  figmaPaste: "div";
  stilu10Pt100: "div";
  group2: "div";
  group4: "div";
  group5: "div";
  _: "div";
  group6: "div";
  group7: "div";
  group8: "div";
  group9: "div";
  rectangle7: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHomepage__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    figmaPaste: makeNodeComponent("figmaPaste"),
    stilu10Pt100: makeNodeComponent("stilu10Pt100"),
    group2: makeNodeComponent("group2"),
    group4: makeNodeComponent("group4"),
    group5: makeNodeComponent("group5"),
    _: makeNodeComponent("_"),
    group6: makeNodeComponent("group6"),
    group7: makeNodeComponent("group7"),
    group8: makeNodeComponent("group8"),
    group9: makeNodeComponent("group9"),
    rectangle7: makeNodeComponent("rectangle7"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */