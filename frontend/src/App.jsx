import { AppShell, Container, Tabs, Title } from '@mantine/core'
import { IconTrophy, IconChartBar, IconUsers } from '@tabler/icons-react'
import Leaderboard from './components/Leaderboard'
import SkillHeatmap from './components/SkillHeatmap'
import CandidateCard from './components/CandidateCard'
import { getAllCandidates } from './data/mockData'

function App() {
  const candidates = getAllCandidates()

  return (
    <AppShell
      header={{ height: 80 }}
      padding="md"
    >
      <AppShell.Header p="md">
        <Container size="xl">
          <Title order={1} c="blue">
            🏭 Recycling Production Line Manager Selection
          </Title>
          <p style={{ margin: 0, color: '#666' }}>
            AI-Powered Candidate Evaluation System
          </p>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Container size="xl">
          <Tabs defaultValue="leaderboard">
            <Tabs.List>
              <Tabs.Tab value="leaderboard" leftSection={<IconTrophy size={16} />}>
                Top 10 Leaderboard
              </Tabs.Tab>
              <Tabs.Tab value="heatmap" leftSection={<IconChartBar size={16} />}>
                Skills Heatmap
              </Tabs.Tab>
              <Tabs.Tab value="candidates" leftSection={<IconUsers size={16} />}>
                All Candidates
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="leaderboard" pt="xl">
              <Leaderboard />
            </Tabs.Panel>

            <Tabs.Panel value="heatmap" pt="xl">
              <SkillHeatmap />
            </Tabs.Panel>

            <Tabs.Panel value="candidates" pt="xl">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1rem' }}>
                {candidates.map(candidate => (
                  <CandidateCard key={candidate.id} candidate={candidate} />
                ))}
              </div>
            </Tabs.Panel>
          </Tabs>
        </Container>
      </AppShell.Main>
    </AppShell>
  )
}

export default App