---
title: 公开项目
published: 2026-07-16
pinned: true
description: 从 Agent 运行时研究、组合优化到数据库实现，这里整理了我的部分公开项目。
tags: [项目, Python, C++, Agent]
category: 项目
slug: projects
---

这里整理了我的部分公开项目。项目介绍与数据来自各仓库当前公开的 README，后续会继续补充设计过程和复盘。

## Agent-Attention Runtime Research

[Agent](https://github.com/lsmd23/Agent) 是一个稀疏、可记录路由过程的智能体运行时研究项目。它围绕智能体、工具、记忆、验证器与停止门控进行动态激活，并在相同的大模型调用预算下与 ReAct、固定工作流、检索记忆和 MoA 等方案比较。

技术栈以 Python 为主，仓库包含实验、评测与测试代码。

## AIHackathon

[AIHackathon](https://github.com/lsmd23/AIHackathon) 是美团 AI Hackathon 的快递派单组合优化项目。核心方案将任务分区与骑手分配解耦，并对多种策略统一评分、自评估后选择结果。

项目 README 记录的结果包括：官方 10 个算例实现 100% 任务覆盖，平均惩罚分 727.85，单算例端到端运行时间小于 10 秒。

## THU-SS-DB

[THU-SS-DB](https://github.com/lsmd23/THU-SS-DB) 是面向数据库原理课程开发的关系型数据库管理系统。项目使用 C++，实现了基本的关系数据增删改查与多种 SQL 语句。

整体架构包含 session、query engine 和 storage engine：查询引擎覆盖解析、分析、规划与执行流程，存储引擎负责数据组织和磁盘读写。

## 课程笔记

[notes](https://github.com/lsmd23/notes) 用于公开归档课程笔记，方便后续检索、复习和持续整理。
