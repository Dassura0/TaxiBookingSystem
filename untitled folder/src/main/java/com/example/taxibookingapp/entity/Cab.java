@Entity
@Data
public class Cab {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String model;
    private String licensePlate;
    private Boolean availability;

    @ManyToOne
    @JoinColumn(name = "driver_id")
    private Driver driver;
}
