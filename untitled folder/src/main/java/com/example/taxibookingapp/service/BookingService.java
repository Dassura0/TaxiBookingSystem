@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id).orElse(null);
    }

    public Booking createBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public Booking updateBooking(Long id, Booking bookingDetails) {
        Booking booking = bookingRepository.findById(id).orElse(null);
        if (booking != null) {
            booking.setPickupLocation(bookingDetails.getPickupLocation());
            booking.setDropLocation(bookingDetails.getDropLocation());
            booking.setBookingTime(bookingDetails.getBookingTime());
            booking.setStatus(bookingDetails.getStatus());
            booking.setCustomer(bookingDetails.getCustomer());
            booking.setDriver(bookingDetails.getDriver());
            booking.setCab(bookingDetails.getCab());
            return bookingRepository.save(booking);
        }
        return null;
    }

    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}
