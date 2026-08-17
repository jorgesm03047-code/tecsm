import Services from '../components/Services';
import ProcessTimeline from '../components/ProcessTimeline';
import ComparisonTable from '../components/ComparisonTable';
import FAQ from '../components/FAQ';
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';

export default function ServicesPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ paddingTop: '80px', minHeight: '100vh' }}
    >
      <Services />
      <ComparisonTable />
      <ProcessTimeline />
      <FAQ />
    </motion.div>
  );
}
