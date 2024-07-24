@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public List<Admin> getAllAdmins() {
        return adminRepository.findAll();
    }

    public Admin getAdminById(Long id) {
        return adminRepository.findById(id).orElse(null);
    }

    public Admin createAdmin(Admin admin) {
        return adminRepository.save(admin);
    }

    public Admin updateAdmin(Long id, Admin adminDetails) {
        Admin admin = adminRepository.findById(id).orElse(null);
        if (admin != null) {
            admin.setUsername(adminDetails.getUsername());
            admin.setPassword(adminDetails.getPassword());
            admin.setEmail(adminDetails.getEmail());
            admin.setFirstName(adminDetails.getFirstName());
            admin.setLastName(adminDetails.getLastName());
            admin.setPhoneNumber(adminDetails.getPhoneNumber());
            return adminRepository.save(admin);
        }
        return null;
    }

    public void deleteAdmin(Long id) {
        adminRepository.deleteById(id);
    }
}
