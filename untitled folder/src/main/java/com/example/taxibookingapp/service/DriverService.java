@Service
public class DriverService {
    @Autowired
    private DriverRepository driverRepository;

    public List<Driver> getAllDrivers() {
        return driverRepository.findAll();
    }

    public Driver getDriverById(Long id) {
        return driverRepository.findById(id).orElse(null);
    }

    public Driver createDriver(Driver driver) {
        return driverRepository.save(driver);
    }

    public Driver updateDriver(Long id, Driver driverDetails) {
        Driver driver = driverRepository.findById(id).orElse(null);
        if (driver != null) {
            driver.setUsername(driverDetails.getUsername());
            driver.setPassword(driverDetails.getPassword());
            driver.setEmail(driverDetails.getEmail());
            driver.setFirstName(driverDetails.getFirstName());
            driver.setLastName(driverDetails.getLastName());
            driver.setPhoneNumber(driverDetails.getPhoneNumber());
            driver.setLicenseNumber(driverDetails.getLicenseNumber());
            driver.setApprovalStatus(driverDetails.getApprovalStatus());
            return driverRepository.save(driver);
        }
        return null;
    }

    public void deleteDriver(Long id) {
        driverRepository.deleteById(id);
    }
}
