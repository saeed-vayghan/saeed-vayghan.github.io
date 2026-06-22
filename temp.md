
1. Introduction: My Background
Building Scalable Platforms for 15 Years
"My name is Saeed. I have been a software engineer for 15 years. (This covers: Proven Engineering Impact and 10+ years experience).
Over my career, I have been a Co-founder, a CTO, and a Tech Lead. I have built systems from zero to one, and I have led teams in Enterprise companies like Klarna. But my true passion isn't just writing code; it is building platforms. (This covers: Builder First and Design for Scale).
I believe a Staff Engineer’s job is to create the 'foundation.' If I build a tool, I want it to help other engineers work faster. This is why I am so excited about the AI Capabilities at Zapier. You are building the foundation for the automation, and that is exactly where I can contribute." (This covers: Why this role is different/exciting).

2. Platform Thinking: The Universal Sync Layer
Designing for 8,000 Apps and Infinite Scale
"Let’s talk about building for scale. At Rechat, I had to build a system to sync data with Google and Microsoft. At first glance a good working solution would be building two different tools. (This is the Context).
Instead, I architected a Unified Sync Abstraction Layer. I created one internal language that worked for any provider. (This is the Action/STAR). Because of this, when we wanted to add a third or fourth app, it was very easy. We didn't have to rewrite the core logic. (This is the Result).
(This section covers: Unified Architecture, System Architecture, and Design for Scale).
At Zapier, I think you have built orchestration layers that are 'provider-agnostic.' This is how you handle 8,000 apps without the system breaking. (This is the Learning/CARL). 
3. Applied AI: Reliability and Evaluation
Moving Beyond the Hype to Production AI
"Now, let’s talk about AI. At Klarna, I led the whole life cycle development of a new product for the US insurance market by architecting an AI agentic workflow. I managed to do that because I learned how to work with Product, Legal, and other Engineering teams to align goals in a fast-moving organization (This is the Context).
The biggest challenge with LLMs is that they can be unpredictable. For a bank, a 'hallucination' is a big risk. To solve this, we didn't just write a better prompt or hard coded state machine. We built a Generic Evaluation Pipeline. (This is the Action/STAR). We used a 'Golden Dataset' to test every change. We measured three things: hallucination rate, latency, and cost. (This covers: LLM Expertise, Evaluation Systems, and Pragmatic Judgment).
I also designed circuit breakers and fall-back solutions to make sure during Black Friday our AI stays reliable(This covers: Own the Outcome and Move Fast Forward).
I learned that 'cool' AI is easy, but 'reliable' AI is hard. (This is the Learning/CARL). You need a system that treats AI like a disciplined engineering product. This matches Zapier’s goal of a 'high-quality platform with great ergonomics.'" (This covers: Reliable, Fast, and Safe AI).

4. Staff Impact: Empowering Other Engineers
Being a Force Multiplier through Tooling
"As a Staff Engineer, I focus on Developer Experience. I noticed that different teams were all struggling with the same AI problems, like managing memory or token costs. (This is the Context).

I also use AI every day to work faster. I am working on an open-source AI agentic framework to have more autonomous Agents. As an example, having a middleware to route LLM calls to the most cost effective one, not all LLM calls need the Gemini Pro.
Then I package the best practices into 'bricks' that any team could use. (This is the Action/STAR). 
(This section covers: Platform Engineering, Mentoring Engineers, and Raising the Technical Bar).
I have a spec-driven principle where I use AI to challenge my technical designs before I ever write code. I share these workflows with my team so we can all Move Fast Forward. (This covers: AI Power User and Advocating for AI Workflows). I believe it is part of my job to help everyone around me become better."



1. Navaak: From "Developer" to "Platform Architect"
The Strategy: Don't say you "built the backend." Say you built the Internal Developer Platform
At Navaak I architected an event-driven multi datacentor application to serve millions of users to listen to music. We gradually improved the Internal Developer Platform that allowed a 50-person company to scale
Example 1: Centralized Event Orchestration
Problem: Services were becoming tightly coupled.
Solution: I built a standardized event-bus protocol and state-machine for log processing.
Leverage: Instead of every team writing their own data logic, they simply "plugged into" the engine. This reduced the time to launch new analytics features by 50%.


2. Rechat: From "Sync Feature" to "Integration Framework"
Example 1: The Provider-Agnostic Sync Engine
Problem: Building separate sync logic for Google and Microsoft was redundant.
Solution: I architected a Unified Abstraction Layer that mapped a schema into a single data model.
Leverage: Adding a "third" provider (like Apple) would require only a simple adapter. It also helped to implement the security-as-code patterns in order to pass Google's extensive security audit process.

3. Klarna: From "AI Feature" to "AI Capabilities Platform"
Example 3: High-Scale Reliability Patterns for AI
Problem: AI services are often the slowest part of a system and can cause failures during peak traffic.
Solution: I architected and led the development of a circuit-breaking and fallback strategies for our LLM.
Leverage: We ensured the "Extended Warranty" platform stayed alive during Black Friday.


Situation: LLM outputs are unpredictable and risky for financial services.
Task: Ensure every AI decision is accurate and safe.
Action: Built a "Golden Dataset" framework to measure hallucinations and latency.
Result: Any team could validate their AI quality before shipping.


1. The Founder’s Journey (Navaak) I spent six years as Co-Founder and CTO of Navaak. We started from nothing and grew it into the market-leading music streaming service in Iran.
It was a difficult journey, but we managed to get recognized by Financial Times and Slush.
I learned firsthand how hard it is to find product-market fit and lead a team of 50+ people through uncertainty.
2. The Scale Experience (Klarna) To understand how global giants operate, I joined Klarna.
I worked on systems for the US market and helped ensure reliability during Black Friday.
This experience taught me the discipline and structure needed to build secure Fintech products at a massive scale.
