import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8', // soft light grey background
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  headerText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1E293B', // dark slate
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 0.5,
  },

  section: {
    marginVertical: 14,
    padding: 18,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0F172A', // slightly darker for better readability
    marginBottom: 10,
  },

  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 10,
  },

  itemName: {
    flex: 1,
    fontSize: 16,
    color: '#334155',
  },

  counter: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2563EB', // blue accent
    marginHorizontal: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    marginVertical: 8,
  },

  button: {
    backgroundColor: '#2563EB', // rich blue
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    shadowColor: '#2563EB',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 4,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
});
