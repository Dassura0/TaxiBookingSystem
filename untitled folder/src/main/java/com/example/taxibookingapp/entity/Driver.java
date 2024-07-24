@Entity
@Data
public class Driver {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    private String email;
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private String licenseNumber;
    private Boolean approvalStatus;

    @OneToMany(mappedBy = "driver")
    private List<Cab> cabs;

    @OneToMany(mappedBy = "driver")
    private List<Booking> bookings;
}
