// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: GTgVzsUHzMuCMexkxJk8C
import * as React from "react";
import { SanityCredentialsProvider } from "@plasmicpkgs/plasmic-sanity-io"; // plasmic-import: XenoJpDQeDb/codeComponent

export default function GlobalContextsProvider(props) {
  const { children, sanityCredentialsProviderProps } = props;
  return (
    <SanityCredentialsProvider
      {...sanityCredentialsProviderProps}
      apiVersion={
        sanityCredentialsProviderProps &&
        "apiVersion" in sanityCredentialsProviderProps
          ? sanityCredentialsProviderProps.apiVersion
          : undefined
      }
      dataset={
        sanityCredentialsProviderProps &&
        "dataset" in sanityCredentialsProviderProps
          ? sanityCredentialsProviderProps.dataset
          : "production"
      }
      projectId={
        sanityCredentialsProviderProps &&
        "projectId" in sanityCredentialsProviderProps
          ? sanityCredentialsProviderProps.projectId
          : "b2gfz67v"
      }
      token={
        sanityCredentialsProviderProps &&
        "token" in sanityCredentialsProviderProps
          ? sanityCredentialsProviderProps.token
          : undefined
      }
      useCdn={
        sanityCredentialsProviderProps &&
        "useCdn" in sanityCredentialsProviderProps
          ? sanityCredentialsProviderProps.useCdn
          : undefined
      }
    >
      {children}
    </SanityCredentialsProvider>
  );
}