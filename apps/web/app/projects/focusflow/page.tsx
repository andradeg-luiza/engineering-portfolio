export default function FocusFlowPage() {
  return (
    <main data-testid="focusflow-page">
      <div data-testid="hero">
        <p>FocusFlow</p>
        <h1><strong>Clarity before productivity</strong></h1>
        <p>
          FocusFlow is a backend-first project built to support people who struggle with
          organization, mental overload, and staying focused on what truly matters.
        </p>
        <h1><strong>Problem</strong></h1>
        <p>
          Most productivity tools manage tasks, but don’t protect focus. The result is constant
          context switching and low-quality execution.
        </p>
        <h1><strong>What FocusFlow Is</strong></h1>
        <p>
          FocusFlow is a productivity platform designed for deep work, sustainable delivery,
          and measurable progress.
        </p>
        <h1><strong>Tech Stack</strong></h1>
        <p>
          FocusFlow is a productivity platform designed for deep work, sustainable delivery,
          and measurable progress.
          <li>Backend: NestJS, Prisma, PostgreSQL</li>
          <li>Testing: Jest + Supertest (E2E foundation)</li>
          <li>Infra: Docker (dev + isolated test DB)</li>
          <li>Infra: Docker (dev + isolated test DB)</li>
        </p>
        <h1><strong>Current Status</strong></h1>
        <p>
          <li>Authentication foundation completed (register endpoint with hashed password + validation).</li>
          <li>Test database and E2E tests running locally and reproducible.</li>
        </p>



      </div>
    </main>
  );
}