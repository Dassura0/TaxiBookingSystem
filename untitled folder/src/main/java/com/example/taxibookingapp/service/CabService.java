@Service
public class CabService {
    @Autowired
    private CabRepository cabRepository;

    public List<Cab> getAllCabs() {
        return cabRepository.findAll();
    }

    public Cab getCabById(Long id) {
        return cabRepository.findById(id).orElse(null);
    }

    public Cab createCab(Cab cab) {
        return cabRepository.save(cab);
    }

    public Cab updateCab(Long id, Cab cabDetails) {
        Cab cab = cabRepository.findById(id).orElse(null);
        if (cab != null) {
            cab.setModel(cabDetails.getModel());
            cab.setLicensePlate(cabDetails.getLicensePlate());
            cab.setAvailability(cabDetails.getAvailability());
            cab.setDriver(cabDetails.getDriver());
            return cabRepository.save(cab);
        }
        return null;
    }

    public void deleteCab(Long id) {
        cabRepository.deleteById(id);
    }
}
