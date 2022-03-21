---
order: "4F"
title: "Component Composition"
path: "/component-composition"
section: "Core React Concepts"
description: "One component should do one thing. Brian shows you how to break down bigger components into smaller components."
---

This is against the React way: in general we want small-ish
(use your best judgment but lean towards smaller when you have a choice) components that do one thing.

When we start having a ballooning component like we do here,
take your larger component and break it down into smaller components.

In general I find two reasons to break a component into smaller components: reusability and organization.

When you want to use the same component in multiple places (e.g. a button, a tool tip, etc.) then it's helpful to have one component to maintain, test, use, etc.

Other times it can be useful to break concepts down into smaller concepts to make a component read better.

For example, if we put all the logic for this entire page into one component, it would become pretty hard to read and manage.
By breaking it down we can make each component easier to understand when you read it and thus maintain.
